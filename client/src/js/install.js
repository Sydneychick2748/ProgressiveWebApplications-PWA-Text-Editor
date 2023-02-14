const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // Store the triggered events
    window.deferredPrompt = event;

    // Remove the hidden class from the button.
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;

    if (!promptEvent) {
        return;
    }

    // Show prompt
    promptEvent.prompt();

    // Wait for the user to respond to the prompt
    const result = await promptEvent.userChoice;

    // Reset the deferred prompt variable, since
    // prompt() can only be called once.
    window.deferredPrompt = null;

    // Hide the install button.
    butInstall.classList.toggle('hidden', true);

    // Log user response to prompt.
    console.log('User response to the install prompt:', result.outcome);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('App was installed successfully', event);
        window.deferredPrompt= null;
        butInstall.classList.toggle('hidden', true);
});

