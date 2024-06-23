window.onload = () => {
    document.querySelector('#year').textContent = new Date().getFullYear();

    document.querySelector('#lastModified').textContent = `Last modified at ${document.lastModified}`
 }

