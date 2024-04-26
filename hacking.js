const one = document.querySelector("#one")

const initialising = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            one.innerHTML = "initialising hacking ...";
            resolve();
        }, 3000)
    })
}

const gettingAccess = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            one.innerHTML = "Getting Access ...";
            resolve();
        }, 3000)
    })
}

const findingPassword = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            one.innerHTML = "Finding your password ...";
            resolve();
        }, 3000)
    })
}

const transferringFiles = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            one.innerHTML = "Transferring your password files to server ...";
            resolve();
        }, 3000)
    })
}

const CleaningUp = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            one.innerHTML = "Cleaning up ...";
            resolve();
        }, 3000)
    })
}

const end = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            one.innerHTML = "End";
            resolve();
        }, 3000)
    })
}

async function asyncInitialising() {
    await initialising()
    await gettingAccess()
    await findingPassword()
    await transferringFiles()
    await CleaningUp()
    await end()
    return "end"
}

asyncInitialising()
