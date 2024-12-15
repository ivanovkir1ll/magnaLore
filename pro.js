function handleStateChange(newState) {
    if (newState !== currentState) {
        // State has changed, perform necessary actions
        console.log('State has changed. Performing additional actions...');
        currentState = newState; // Update the current state
    } else {
        console.log('State remains the same. No additional actions needed.');
    }
}
