let connectedSesion = false;
let grtcSession = null;
let grtcClient = null;
let ip = null;
let userData = null;

const conf = {
  webrtc_gateway: constants.webrtc_gateway,
  stun_server: constants.stun_server,
  turn_server: constants.turn_server,
  turn_username: constants.turn_username,
  turn_password: constants.turn_password,
  dtls_srtp: constants.dtls_srtp
};

function uuidv4() {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
}

/**
 * INFORMACIÓN PARA EL EQUIPO DE SEGURIDAD
 * Esta es una variable de la librería, es llamada de un archivo ubicado en lib/genesys/grtc.js
 * Solo podemos llamarla de esta manera porque no debemos modigicar la librería
 */
var Grtc = window.Grtc;
grtcClient = new Grtc.Client(conf);

grtcClient.onPeerClosing.add(function () {
  endCall();
});

grtcClient.onMediaSuccess.add(function () {
  grtcClient.onConnect.add(function () {
    grtcSession = new Grtc.MediaSession(grtcClient);
    grtcSession.setData(userData);

    grtcSession.onRemoteStream.add(function (data) {
      grtcClient.setViewFromStream(
        document.getElementById("remoteView"),
        data.stream
      );
    });

    grtcSession.makeOffer(constants.skill, true, false);
  });

  grtcClient.onFailed.add(() => {});
});

grtcClient.onMediaFailure.add(function () {});

grtcClient.enableMediaSource(true, false);

window.onbeforeunload = function () {
  grtcClient.disconnect();
};

async function getIpClient() {
  try {
    const response = await fetch(constants.getIpClientResponseUrl);
    const data = await response.json();
    return data.ip;
  } catch (error) {
    // No mostramos mensajes de error al usuario
    return "";
  }
}

function setConfigCall(userCall) {
  userData = userCall;
  grtcClient.connect();
  connectedSesion = true;
}

function endCall() {
  if (connectedSesion && grtcSession) {
    try {
      grtcClient.disconnect();
      grtcSession.terminateCall();
      grtcSession = null;
      connectedSesion = false;
    } catch {
      // No mostramos mensajes de error al usuario
    }
  }
}

async function initCall() {
  if (connectedSesion) {
    return;
  }

  const user = structuredClone(constants.user);
  user[7].value = uuidv4();
  user[5].value = await getIpClient();
  setConfigCall(user);
}

function createDivMedia() {
  if (!document.getElementById("divMedia")) {
    const divMedia = document.createElement("div");
    divMedia.id = "divMedia";
    divMedia.style.display = "none";
    document.body.appendChild(divMedia);

    const controlVideoRemoteView = document.createElement("video");
    controlVideoRemoteView.className = "video-fluid z-depth-1";
    controlVideoRemoteView.setAttribute("width", "160");
    controlVideoRemoteView.setAttribute("height", "120");
    controlVideoRemoteView.setAttribute("id", "remoteView");
    controlVideoRemoteView.setAttribute("autoplay", "autoplay");
    controlVideoRemoteView.setAttribute("controls", "controls");
    divMedia.appendChild(controlVideoRemoteView);

    const videoAu = document.getElementById("localView");
    const audio = new Audio(videoAu);
    audio.volume = 1;
  }
}

async function ClickToCall() {
  const controlTime = await timeControl();
  if (controlTime.booleanValid) {
    createDivMedia();
    initCall();
  }
}

function ClickToEndCall() {
  endCall();
}

async function timeServer() {
  let dateTime = {};
  try {
    const response = await fetch(constants.url_api_horario, {
      method: "POST"
    });
    const data = await response.json();
    dateTime = data;
  } catch (error) {
    const fecha = new Date();
    dateTime = {
      hour: fecha.getHours(),
      minutes: fecha.getMinutes(),
      seconds: fecha.getSeconds()
    };
  }
  return dateTime;
}

async function timeControl() {
  let arrayTimeControl = {};
  try {
    const dateTimeServer = await timeServer();
    const dateNow = new Date();
    const dateWeek = dateNow.getUTCDay() + 1;
    const dateHour = parseInt(dateTimeServer.hour, 10);
    const dateMinutes = parseInt(dateTimeServer.minutes, 10);
    const dateSeconds = parseInt(dateTimeServer.seconds, 10);
    const dateHourActually =
      prefix(dateHour) + ":" + prefix(dateMinutes) + ":" + prefix(dateSeconds);
    if (dateWeek === 10) {
      arrayTimeControl = {
        booleanValid: false
      };
    } else if (dateWeek === 7) {
      if (
        dateHourActually < constants.time_control_weekend[0] ||
        dateHourActually >= constants.time_control_weekend[1]
      ) {
        arrayTimeControl = {
          booleanValid: false
        };
      } else {
        arrayTimeControl = {
          booleanValid: true,
          intMiliSeg: calculateDifference(
            dateHourActually,
            constants.time_control_weekend[2]
          )
        };
      }
    } else {
      if (
        dateHourActually < constants.time_control_week[0] ||
        dateHourActually >= constants.time_control_week[1]
      ) {
        arrayTimeControl = {
          booleanValid: false
        };
      } else {
        arrayTimeControl = {
          booleanValid: true,
          intMiliSeg: calculateDifference(
            dateHourActually,
            constants.time_control_week[2]
          )
        };
      }
    }
  } catch (error) {
    if (error) {
      arrayTimeControl = { booleanValid: false };
    }
  }
  return arrayTimeControl;
}

function prefix(intNum) {
  return intNum < 10 ? "0" + intNum : intNum.toString();
}

function calculateDifference(currentTime, targetTime) {
  const [currentHours, currentMinutes, currentSeconds] = currentTime
    .split(":")
    .map(Number);
  const [targetHours, targetMinutes, targetSeconds] = targetTime
    .split(":")
    .map(Number);
  const currentDate = new Date();
  currentDate.setHours(currentHours, currentMinutes, currentSeconds);
  const targetDate = new Date();
  targetDate.setHours(targetHours, targetMinutes, targetSeconds);
  return targetDate - currentDate;
}
