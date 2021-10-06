const data = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
  },
  {
    id: 2,
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
  },
  {
    id: 3,
    text: "Urna molestie at elementum eu facilisis sed. Ut eu sem integer vitae justo eget"
  },
  {
    id: 4,
    text: "Cras adipiscing enim eu turpis egestas pretium aenean. Iaculis urna id volutpat lacus laoreet non curabitur gravida arcu"
  },
  {
    id: 5,
    text: "Euismod quis viverra nibh cras pulvinar mattis nunc. Sed sed risus pretium quam vulputate"
  }

]

const getAllText = data => {
  generatedString = ''
  for (i = 0; i <= 200; i++) {
    charToAdd = data.map((string) => {
      generatedString = generatedString + string.text.charAt(i);
    });
  }
  console.log(generatedString.replace(/\s/g, ''));

  
  
  
}

getAllText(data);

