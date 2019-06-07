class puppie {
  constructor(breed, cost, number, descr, src) {
    this.Breed = breed;
    this.Cost = cost;
    this.Number = number;
    this.Description = descr;
    this.Source = src;
  }
}
const puppies = [
  new puppie(
    "Labrador",
    "100$",
    5,
    "Labradors are dogs for the family, they quickly become its active members, in their own way, but clearly participate in important and not very important events. They need to communicate in a literal sense, and the characteristic feature of a Labrador is that dogs do not disturb. ",
    "images/labrador.jpg"
  ),
  new puppie(
    "Doberman",
    "150$",
    2,
    "Muscular, elegant and graceful dog. This breed is courageous, resourceful, courageous, very clever, with an excellent sense of smell and with an aggressive look. They are among the most respected and popular dog breeds; known for their deep devotion and defensive nature.",
    "images/doberman.jpg"
  ),
  new puppie(
    "Chow chow",
    "120$",
    5,
    "The Chow is an independent, proud, imperturbable dog with dignity. They are quite reserved and suspicious of strangers, but for the owner it is a faithful and devoted companion and protector.",
    "images/chaochao.jpg"
  ),
  new puppie(
    "Yorkshire Terrier",
    "170$",
    1,
    "Despite the miniature, Yorkshire terriers retain the qualities inherent in large terriers - courage, curiosity, tirelessness. He is friendly with people and with other dogs and loyal to the owner.",
    "images/terrier.jpg"
  ),
  new puppie(
    "St. Bernard dog",
    "135$",
    4,
    "St. Bernard is an intelligent dog with a strong sense of orientation and smell. It is a quiet, calm, playful dog, not much barking. Affectionate to the family, he is friends with children and accepts strangers well, without being aggressive.",
    "images/Saint-Bernard-Puppies.jpg"
  )
];

const buttons = document.querySelectorAll(".menu_button");
const image = document.querySelector(".info_image");
const parameters = document.querySelectorAll(".parameters");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function() {
    let j = 0;
    for (prop in puppies[i]) {
      if (j === 4) {
        break;
      }
      parameters[j].textContent = prop + ": " + puppies[i][prop];
      j++;
    }
    image.src = puppies[i].Source;
  });
}
