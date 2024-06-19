const fileInput = document.getElementById('file-input');
const uploadButton = document.getElementById('upload-button');
const fileList = document.getElementById('file-list');

uploadButton.addEventListener('click', (e) => {
  e.preventDefault();
  const files = fileInput.files;
  const formData = new FormData();

  for (let i = 0; i < files.length; i++) {
    formData.append('files', files[i]);
  }

  fetch('/upload', {
    method: 'POST',
    body: formData
  })
 .then((response) => response.json())
 .then((data) => {
    const fileListHTML = '';
    data.forEach((file) => {
      fileListHTML += `<li>${file.name} (${file.size} bytes)</li>`;
    });
    fileList.innerHTML = fileListHTML;
  })
 .catch((error) => {
    console.error(error);
  });
});