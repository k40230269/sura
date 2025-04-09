
var showAgentButton = true;
var messagesLength = 0;
var showHideLoading = false;
var evaluationStarted = false;

document.addEventListener('DOMContentLoaded', function () {
    // saveIP();

    setTimeout(function () {
        validateTitle();
        setTrigger();
        validateStartChat();
        onAudioButton();
        messagesLength = getConversationLength();
        setInterval(validateNewMessage, 2000);
    }, 1000);
	
	setTimeout(function () {
		
		if (!window._laq) {
			window._laq = [];
		}
		window._laq.push(function () {
			liveagent.showWhenOnline(
				"5733w00000158LG",
				document.getElementById("liveagent_button_online_5733w00000158LG")
			);
			liveagent.showWhenOffline(
				"5733w00000158LG",
				document.getElementById("liveagent_button_online_5733w00000158LG")
			);
			
		});
        const newElement = document.querySelector("app-container-login");
        onChangeObserver()
        if (newElement)
            crearObserver(newElement, () => onChangeObserver())
    }, 3000);
});


function setTrigger() {
    const buttonTrigger = document.querySelector('.chattigo-widget-trigger');
    if (buttonTrigger != null) {
        buttonTrigger.addEventListener('click', function () {
            validateTitle();
            validateStartChat();
        });
    }
}

function validateTitle() {
    setTimeout(function () {
        const container = document.querySelector('.chattigo-widget-header--fixed');
        if (container) {
            const title = document.querySelector('.chattigo-widget-header__h3 custom');
            if (title == null) {
                const newTitle = document.createElement('h3');
                newTitle.textContent = 'TiBot';
                newTitle.className = 'chattigo-widget-header__h3 custom'
                container.appendChild(newTitle);
            }
        }

        // const evaluationMessage = document.querySelector('.c-evaluation__message');
        // if (evaluationMessage) {
        //     if (evaluationMessage.textContent && evaluationMessage.textContent.trim() == 'webchatChannel.finish.title-message') {
        //         evaluationMessage.textContent = 'Evalúa la conversación';
        //     }
        // }

        const startChatButton = document.querySelector('.c-button');
        if (startChatButton) {
            if (startChatButton.textContent && startChatButton.textContent.trim() == 'webchatChannel.finish.button-text') {
                startChatButton.textContent = 'Volver Al inicio';
            }
        }
    }, 1000);
}

function validateStartChat() {
    const startChatButton = document.querySelector('.c-button');
    if (startChatButton) {

        startChatButton.className = 'c-button c-button--primary';

        startChatButton.addEventListener('click', function () {

            setTimeout(function () {
                showHideLoading = true;
                onInitChat();
            }, 3000);
        });
    } else {
        showHideLoading = false;
        onInitChat();
    }
}

function onInitChat() {

    evaluationStarted = false;

    const headerChat = document.querySelector('.chattigo-widget-header');
    if (headerChat) {
        headerChat.className = 'chattigo-widget-header custom-icon';
    }

    const headerImg = document.querySelector('.chattigo-widget-header__image');
    if (headerImg) {
        headerImg.className = 'chattigo-widget-header__image custom-img'
    }

    // showLoading();

    // showHideMessageBody();

    // Add icon reset
    onRestartChatButton();

    validateDIDWebChat();

    if (showAgentButton) {
        // Add icon agent
        onAgentChatButton();
    }

    // Add icon agent
    onConversationChatButton();

    // Add listener icon config
    onConfigChatButton();

    // Add listener icon minimize
    onMinimizeChatButton();

    // Add icon mic
    onAudioButton();
}

function validateDIDWebChat() {
    const script = document.querySelectorAll('script[title="ventassoat543-10847-webchat@wc"]');
    if (script != null && script.length > 0) {
        showAgentButton = false;
    }
}

function onConversationChatButton() {
    setTimeout(function () {
        let conversationChatButton = document.querySelector('.chattigo-icon-conversation');
        if (conversationChatButton == null) {
            const container = document.querySelector('.chattigo-widget-header__actions');
            if (container != null) {
                const buttonItem = document.createElement('a');
                buttonItem.className = 'chattigo-widget-header__actions--item';

                conversationChatButton = document.createElement('span');
                conversationChatButton.className = 'chattigo-icon-conversation';
                conversationChatButton.title = 'Chatea con Tibot';
                conversationChatButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-chat-square-text" viewBox="0 0 16 16"><path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/><path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5M3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6m0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5"/></svg>'
                container.prepend(buttonItem);
                buttonItem.prepend(conversationChatButton);

                conversationChatButton.addEventListener('click', function () {
                    const elements = document.querySelectorAll('.chattigo-widget-logout');
                    if (elements != null && elements.length > 0) {
                        let configChatButton = document.querySelector('.chattigo-icon-config');
                        if (configChatButton == null) {
                            configChatButton = document.querySelector('.chattigo-icon-config-custom');
                        }
                        configChatButton.click();
                        // showHideMessageBody();
                    }
                });
            }
        }
    }, 500);
}


function onAgentChatButton() {
    setTimeout(function () {
        const icon = document.querySelector('.chattigo-icon-agent');
        if (icon == null) {
            const container = document.querySelector('.chattigo-widget-header__actions');
            if (container != null) {
                const buttonItem = document.createElement('a');
                buttonItem.className = 'chattigo-widget-header__actions--item';

                const agentChatButton = document.createElement('span');
                agentChatButton.className = 'chattigo-icon-agent';
                agentChatButton.title = 'Habla con un asesor';
                agentChatButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-headset" viewBox="0 0 16 16"><path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5"/></svg>';
                container.prepend(buttonItem);
                buttonItem.prepend(agentChatButton);

                agentChatButton.addEventListener('click', function () {
                    sendMessageChat('Habla con un asesor');
                });

                validateShowAgentButton();
            }
        }
    }, 500);
}

function onRestartChatButton() {
    setTimeout(function () {
        const icon = document.querySelector('.chattigo-icon-reset');
        if (icon == null) {
            const container = document.querySelector('.chattigo-widget-header__actions');
            if (container != null) {
                const buttonItem = document.createElement('a');
                buttonItem.className = 'chattigo-widget-header__actions--item';

                const restarChatButton = document.createElement('span');
                restarChatButton.className = 'chattigo-icon-reset';
                restarChatButton.title = 'Reiniciar chat';
                restarChatButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-arrow-repeat" viewBox="0 0 16 16"><path d="M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41m-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9"/><path fill-rule="evenodd" d="M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5 5 0 0 0 8 3M3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9z"/></svg>';
                container.prepend(buttonItem);
                buttonItem.prepend(restarChatButton);

                restarChatButton.addEventListener('click', function () {
                    const elements = document.querySelectorAll('.chattigo-widget-logout');
                    if (elements != null && elements.length == 0) {
                        let configChatButton = document.querySelector('.chattigo-icon-config');
                        if (configChatButton == null) {
                            configChatButton = document.querySelector('.chattigo-icon-config-custom');
                        }

                        configChatButton.click();
                    }

                    addListenersLogoutAction(elements);

                    setTimeout(function () {
                        const restarChatOption = document.querySelector('.chattigo-restar-chat');
                        restarChatOption.click();
                    }, 510);
                });
            }
        }
    }, 500);
}

function onConfigChatButton() {
    const configChatButton = document.querySelector('.chattigo-widget-header__actions--item');
    if (configChatButton) {

        configChatButton.classList.add('chattigo-icon-config-custom');
        configChatButton.title = 'Opciones';

        configChatButton.addEventListener('click', function () {

            setTimeout(function () {
                const elements = document.querySelectorAll('.chattigo-widget-logout');
                addListenersLogoutAction(elements);
                // showHideMessageBody();
                const soundMessage = document.querySelector('.chattigo-widget-list-options__left-side');
                if (soundMessage) {
                    if (soundMessage.textContent && soundMessage.textContent.trim() == 'webchatChannel.sound-message') {
                        soundMessage.textContent = 'Mensajes con Sonido';
                    }
                }
            }, 500);
        });
    }
}

function onMinimizeChatButton() {
    const minimizeChatButton = document.querySelector('.chattigo-icon-arrow-down');
    if (minimizeChatButton) {
        minimizeChatButton.addEventListener('click', function () {
            setTimeout(function () {
                setTrigger();
            }, 500);
        });
    }
}

function addNewoption() {
    const optionBackChat = document.querySelector('.chattigo-option-back');

    if (optionBackChat == null) {
        const parentOptions = document.querySelector('.chattigo-widget-content');
        if (parentOptions != null) {
            const newOption = document.createElement('a');
            newOption.className = 'chattigo-widget-logout chattigo-option-back';
            newOption.textContent = 'Volver';

            parentOptions.append(newOption);

            newOption.addEventListener('click', function () {
                let conversationChatButton = document.querySelector('.chattigo-icon-conversation');
                conversationChatButton.click();
            });
        }
    }
}

function addListenersLogoutAction(elements) {

    if (elements != null && elements.length > 0) {
        elements[0].textContent = 'Volver al inicio';
        elements[1].textContent = 'Cerrar chat';

        elements.forEach(function (element) {
            if (element.textContent.trim() === 'Cerrar chat') {
                element.classList.add('chattigo-end-chat');
                element.addEventListener('click', function () {
                    setTimeout(function () {
                        validateTitle();
                        // configListEvaluation();
                        const returnStartButton = document.querySelector('.c-button--secondary');
                        returnStartButton.addEventListener('click', function () {
                            setTimeout(function () {
                                validateTitle();
                                validateStartChat();
                                setTrigger();
                            }, 500);
                        });
                    }, 500);
                });
            }

            if (element.textContent.trim() === 'Volver al inicio') {
                element.classList.add('chattigo-restar-chat');
                element.addEventListener('click', function () {
                    setTimeout(function () {
                        const restartChatButton = document.querySelector('.ch-ui-modal__modal--buttons--refresh');
                        restartChatButton.addEventListener('click', function () {
                            setTimeout(function () {
                                validateTitle();
                                validateStartChat();
                                setTrigger();
                            }, 500);
                        });

                        restartChatButton.click();
                    }, 500);
                });
            }
        });
    }

}


function sendMessageChat(message) {
    const inputSendMessage = document.querySelector('.c-send-message__input');
    if (inputSendMessage != null) {
        inputSendMessage.readOnly = false;
        inputSendMessage.value = message;
        const event = new Event('input', {
            'bubbles': true,
            'cancelable': true
        });
        inputSendMessage.dispatchEvent(event);
        setTimeout(function () {
            const sendButton = document.querySelector('.c-send-button');
            sendButton.click();
            // inputSendMessage.classList.remove('hide-text');
        }, 1000);
    }
}

function clickOptionToAgent() {
    const buttons = document.querySelectorAll('button[title="Habla con un asesor"]');
    const lastButton = buttons[buttons.length - 1];
    lastButton.click();
}

function onAudioButton() {
    setTimeout(function () {

        // The speech recognition interface lives on the browser’s window object
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition; // if none exists -> undefined
        if (SpeechRecognition) {
            console.log("Your Browser supports speech Recognition");

            const recognition = new SpeechRecognition();
            recognition.continuous = true;
            recognition.lang = "es-ES";

            // Replace audio icon

            const messageActions = document.querySelector('.c-send-message__actions');

            if (messageActions != null) {
                const iconMicrophone = document.querySelector('.chattigo-icon-microphone-off');

                if (iconMicrophone != null) {
                    const parentIconMicrophone = iconMicrophone.parentElement;

                    const iconMic = '<path d="M3.5 6.5A.5.5 0 0 1 4 7v1a4 4 0 0 0 8 0V7a.5.5 0 0 1 1 0v1a5 5 0 0 1-4.5 4.975V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 .5-.5"/><path d="M10 8a2 2 0 1 1-4 0V3a2 2 0 1 1 4 0zM8 0a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3"/>';
                    const iconMicMute = '<path d="M13 8c0 .564-.094 1.107-.266 1.613l-.814-.814A4 4 0 0 0 12 8V7a.5.5 0 0 1 1 0zm-5 4c.818 0 1.578-.245 2.212-.667l.718.719a5 5 0 0 1-2.43.923V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 1 0v1a4 4 0 0 0 4 4m3-9v4.879l-1-1V3a2 2 0 0 0-3.997-.118l-.845-.845A3.001 3.001 0 0 1 11 3"/><path d="m9.486 10.607-.748-.748A2 2 0 0 1 6 8v-.878l-1-1V8a3 3 0 0 0 4.486 2.607m-7.84-9.253 12 12 .708-.708-12-12z"/>';

                    const newAudioButton = document.createElement('a');
                    newAudioButton.insertAdjacentHTML("beforeend", '<span class="custom-icon-microphone"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-mic-mute" viewBox="0 0 16 16"><path d="M13 8c0 .564-.094 1.107-.266 1.613l-.814-.814A4 4 0 0 0 12 8V7a.5.5 0 0 1 1 0zm-5 4c.818 0 1.578-.245 2.212-.667l.718.719a5 5 0 0 1-2.43.923V15h3a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1h3v-2.025A5 5 0 0 1 3 8V7a.5.5 0 0 1 1 0v1a4 4 0 0 0 4 4m3-9v4.879l-1-1V3a2 2 0 0 0-3.997-.118l-.845-.845A3.001 3.001 0 0 1 11 3"/><path d="m9.486 10.607-.748-.748A2 2 0 0 1 6 8v-.878l-1-1V8a3 3 0 0 0 4.486 2.607m-7.84-9.253 12 12 .708-.708-12-12z"/></svg></span>');

                    messageActions.replaceChild(newAudioButton, parentIconMicrophone);

                    const micBtn = document.querySelector(".custom-icon-microphone");
                    const micIcon = micBtn.firstElementChild;

                    // Config Voice Recognition
                    newAudioButton.addEventListener("click", micBtnClick);
                    function micBtnClick() {
                        if (micIcon.classList.contains("bi-mic-mute")) { // Start Voice Recognition
                            recognition.start(); // First time you have to allow access to mic!
                        }
                        else {
                            recognition.stop();
                        }
                    }

                    recognition.addEventListener("start", startSpeechRecognition); // <=> recognition.onstart = function() {...}
                    function startSpeechRecognition() {
                        micIcon.classList.remove("bi-mic-mute");
                        micIcon.classList.add("bi-mic");
                        micIcon.innerHTML = iconMic;
                        const inputSendMessage = document.querySelector('.c-send-message__input');
                        if (inputSendMessage != null) {
                            inputSendMessage.value = 'Escuchando....';
                            inputSendMessage.readOnly = true;
                        }
                        console.log("Voice activated, SPEAK");
                    }

                    recognition.addEventListener("end", endSpeechRecognition); // <=> recognition.onend = function() {...}
                    function endSpeechRecognition() {
                        micIcon.classList.remove("bi-mic");
                        micIcon.classList.add("bi-mic-mute");
                        micIcon.innerHTML = iconMicMute;
                        console.log("Speech recognition service disconnected");
                    }

                    recognition.addEventListener("result", resultOfSpeechRecognition); // <=> recognition.onresult = function(event) {...} - Fires when you stop talking
                    function resultOfSpeechRecognition(event) {
                        const current = event.resultIndex;
                        const transcript = event.results[current][0].transcript;
                        recognition.stop();
                        sendMessageChat(transcript);
                    }
                }
            }
        } else {
            console.log("Your Browser does not support speech Recognition");
        }
    }, 500);
}

function validateShowAgentButton() {
    const configBot = getDataConfigWebChat();

    if (configBot.conversation.conversation && configBot.conversation.conversation.length > 0) {
        const lastMessage = configBot.conversation.conversation.at(-1);

        let label = '';

        if (lastMessage.message && lastMessage.message.attachment && lastMessage.message.attachment.payload && lastMessage.message.attachment.payload.text) {
            label = lastMessage.message.attachment.payload.template_type;
        }

        const iconAgent = document.querySelector('.chattigo-icon-agent');
        if (iconAgent != null) {
            if (label == 'button') {
                if (iconAgent != null) {
                    iconAgent.parentElement.style.display = 'none';
                }
            } else {
                iconAgent.parentElement.style.display = 'block';
            }
        }
    }
}

function validateNewMessage() {

    let newMessagesLength = getConversationLength();
    if (newMessagesLength != messagesLength) {
        messagesLength = getConversationLength();
        onAudioButton();
        if (showAgentButton) {
            validateShowAgentButton();
        }

        // if (newMessagesLength == 1) {
        //     sendWebchatId();
        // } else {
        //     showHideMessageBody();
        // }
    }
}

function getConversationLength() {
    const configBot = getDataConfigWebChat();
    return configBot.conversation.conversation.length ? configBot.conversation.conversation.length : 0;
}

function getDataConfigWebChat() {
    const dataConfig = localStorage.getItem('state');
    return JSON.parse(dataConfig);
}

function setDataConfigWebChat(dataConfig) {
    localStorage.setItem('state', JSON.stringify(dataConfig));
}

function saveIP() {
    fetch('https://api.ipify.org/?format=json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error en la petición: ' + response.statusText);
            }
            return response.json(); // Parsear la respuesta como JSON
        })
        .then(data => {
            localStorage.setItem('IP', data.ip);
        })
        .catch(error => {
            console.error('Hubo un problema con la petición:', error);
        });

}

function sendWebchatId() {
    let user_ip = localStorage.getItem("IP");

    sendMessageChat(user_ip);

    showHideMessageBody();
}

function showHideMessageBody() {

    let newMessagesLength = getConversationLength();

    if (newMessagesLength > 2) {
        hideMessages(2, newMessagesLength);
    } else {
        hideMessages(newMessagesLength, newMessagesLength);
    }
}

function hideMessages(limit, quantity) {
    setTimeout(function () {
        const messageBody = document.getElementById('messageBody');
        if (messageBody != null) {

            if (limit > 0) {
                let messagesBox = messageBody.children;
                messagesBox.item
                let messages = messagesBox[0].children;
                for (let index = 0; index < limit; index++) {
                    let element = messages[index];
                    element.style.display = 'none';
                    if (index == 0) {
                        if (element) {
                            messageChatList = element.getElementsByClassName('message__chat');
                            if (messageChatList) {
                                messageChat = messageChatList[0];
                                if (messageChat) {
                                    chatIdElement = messageChat.firstElementChild;
                                    chatId = chatIdElement.innerHTML;
                                    if (chatId) {
                                        localStorage.setItem('chat_id', chatId);
                                    }
                                }
                            }
                        }

                    }
                }

                if (quantity > 2) {
                    const loading = document.querySelector('.c-message-box-loading');
                    if (loading != null) {
                        loading.style.display = 'none';
                    }

                    const footer = document.querySelector('.chattigo-widget__footer');
                    if (footer != null) {
                        footer.style.display = 'block';
                    }
                    messageBody.style.display = 'block';
                }
            }
        }
    }, 100);
}

function showLoading() {
    setTimeout(function () {
        const content = document.querySelector('.chattigo-widget__content');
        const loading = document.querySelector('.c-message-box-loading');
        if (content && showHideLoading && !loading) {
            content.insertAdjacentHTML("beforeend", '<div class="c-message-box-loading ng-star-inserted"><img class="c-message-box-loading__img" src="https://chattigo.ingeneo.com.co/Sura/WebChat/imgpsh_fullsize_anim.png"><p class="c-message-box-loading__text"> Cargando <span class="load-container"><span class="load load-1">.</span><span class="load load-2">.</span><span class="load load-3">.</span></span></p></div>');
        }
    }, 100);
}

function configListEvaluation() {
    const listEvaluation = document.querySelectorAll('.c-evaluation__item');
    let evaluationIndex = 0;
    listEvaluation.forEach(function (element) {
        evaluationIndex++;
        const nameClass = evaluationIndex + '';
        element.firstElementChild.classList.add(nameClass);
        element.addEventListener('click', function (event) {
            const item = event.target;
            const numberStars = item.classList[0];
            saveEvaluation(numberStars);
            evaluationStarted = true;
        });
    });
}

function saveEvaluation(numberStars) {
    if (!evaluationStarted) {

        chatId = localStorage.getItem('chat_id');

        const url = 'https://chattigo.ingeneo.com.co/SuraApi/api/Tibot/TibotSurvey';

        const data = {
            idChat: chatId,
            surveyResponse: numberStars
        };

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la solicitud');
                }
                return response.json();
            })
            .then(data => {
                console.log('Respuesta del servidor:', data);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }
}

/***************************************************/
function crearObserver(node, callback) {
    const observer = new MutationObserver((mutationsList) => {
        mutationsList = mutationsList.filter(x => x.target.className.includes("c-message-box"))
        for (let mutation of mutationsList) {
            if (mutation.type === "childList") {
                callback(observer);
                break
            }
        }
    });
    const config = { childList: true, subtree: true };
    observer.observe(node, config);
}

function onChangeObserver() {
    const btnOpcion = document.querySelector('.chattigo-btn-pasoagente');
    if (btnOpcion) {
        const btnOpcions = document.querySelectorAll('.chattigo-btn-pasoagente');
        btnOpcions.forEach(x => {
        //    x.setAttribute("id", "liveagent_button_online_5733w00000158LG")
            x.setAttribute("href", "javascript://Chat")
            x.removeEventListener("click", PasoAgente);
            x.addEventListener("click", PasoAgente);

            var data = x.title.split("|")
            liveagent
                .addCustomDetail("Tipo", data[0])
                .saveToTranscript("Tipo_documento_cliente__c");
            liveagent
                .addCustomDetail("Documento", data[1])
                .saveToTranscript("Numero_documento_cliente__c");
            liveagent
                .addCustomDetail("Nombre", data[2])
                .saveToTranscript("Nombre_cliente_chat__c");

                liveagent.init(
                    "https://d.la3-core1.sfdc-lywfpd.salesforceliveagent.com/chat",
                    "5720V000000wk61",
                    "00Dd0000000c6Xg"
                );
           
        });
    }
}


function PasoAgente(e) {
    liveagent.startChat('5733w00000158LG')
}
/***************************************************/
