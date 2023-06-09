function onDragStart(event) {
    event
      .dataTransfer
      .setData('text/plain', event.target.id);
      
    event
      .currentTarget
      .style
      .backgroundColor = 'pink';
      resetButton.addEventListener('click', reset);

  }
  function onDragOver(event) {
    event.preventDefault();
  }

  function onDrop(event) {
    const id = event
      .dataTransfer
      .getData('text');
    const draggableElement = document.getElementById(id);
    const dropzone = event.target;
    dropzone.appendChild(draggableElement);
    const resetButton = document.getElementById('resetButton');


    event
        .dataTransfer
        .clearData();
  }

  function reset() {
    dropArea.innerHTML = 'Drop here';
    console.log('Dropped items have been reset.');
  }
