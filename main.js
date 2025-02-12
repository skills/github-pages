const imageInput = document.getElementById('image-input');
const removeBgButton = document.getElementById('remove-bg');
const resultDiv = document.getElementById('result');
const resultImage = document.getElementById('result-image');
const downloadButton = document.getElementById('download');
const loadingDiv = document.getElementById('loading');

// Enable button only when an image is selected
imageInput.addEventListener('change', () => {
  removeBgButton.disabled = !imageInput.files.length;
});

removeBgButton.addEventListener('click', async () => {
  const file = imageInput.files[0];
  if (!file) return;

  // Show loading state
  loadingDiv.classList.remove('hidden');
  resultDiv.classList.add('hidden');
  removeBgButton.disabled = true;

  try {
    const formData = new FormData();
    formData.append('image_file', file);

    const response = await fetch('https://api.remove.bg/v1.0/removebg', {
      method: 'POST',
      headers: {
        'X-Api-Key': '9kHcnd5Nq8CDGKYxkZP8tatj', // Replace with your Remove.bg API key
      },
      body: formData,
    });

    if (!response.ok) throw new Error('Failed to remove background');

    const blob = await response.blob();
    const url = URL.createObjectURL(blob);
    
    resultImage.src = url;
    resultDiv.classList.remove('hidden');
    
    // Setup download button
    downloadButton.onclick = () => {
      const a = document.createElement('a');
      a.href = url;
      a.download = 'no-background.png';
      a.click();
    };
  } catch (error) {
    alert('حدث خطأ أثناء معالجة الصورة. يرجى المحاولة مرة أخرى.');
    console.error(error);
  } finally {
    loadingDiv.classList.add('hidden');
    removeBgButton.disabled = false;
  }
});
