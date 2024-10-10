// fetch data category btn

const loadCategories = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
};
// displayCategories

const displayCategories = (categories) => {
  const btnContainer = document.getElementById("btn-categories");

  categories.forEach((item) => {
    btnContainer.innerHTML += `<button
            class="w-fit px-20 py-6 flex items-center gap-4 border border-solid border-[#0E7A8126] rounded-2xl"
          >
            <img src=${item.category_icon} alt="Dogs" class="size-12" />
            <span class="text-2xl text-[#131313] font-bold">${item.category}</span>
          </button>
    `;
  });
};

loadCategories();

// fetch data all card

const loadAllCard = () => {
  fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())
    .then((data) => displayAllCard(data.pets));
};
// displayCategories

const displayAllCard = (categories) => {
  const cardContainer = document.getElementById("card-container");

  let sample = {
    petId: 1,
    breed: "Golden Retriever",
    category: "Dog",
    date_of_birth: "2023-01-15",
    price: 1200,
    image: "https://i.ibb.co.com/p0w744T/pet-1.jpg",
    gender: "Male",
    pet_details:
      "This friendly male Golden Retriever is energetic and loyal, making him a perfect companion for families. Born on January 15, 2023, he enjoys playing outdoors and is especially great with children. Fully vaccinated, he's ready to join your family and bring endless joy. Priced at $1200, he offers love, loyalty, and a lively spirit for those seeking a playful yet gentle dog.",
    vaccinated_status: "Fully",
    pet_name: "Sunny",
  };

  categories.forEach((item) => {
    console.log(item);
    cardContainer.innerHTML += `      
    <div>
                <img src=${item.image} alt="Dogs" class="max-w-full h-auto">
                
               <!-- details -->

               <div class="mt-8">
               <h4 class="text-[#131313] text-xl font-bold">${item.pet_name}</h4>

               <ul class="mt-2 pb-4 text-[#131313B2] text-base space-y-2 border-b border-b-[#131313B2]">
                <li>Breed: ${item.breed}</li>
                <li>Birth: ${item.date_of_birth}</li>
                <li>Gender: ${item.gender}</li>
                <li>Price : ${item.price}</li>
               </ul>
               </div>

               <!-- card buttons -->

               <div class="mt-4 flex items-center justify-between gap-1">

                <!-- like button -->

                <button class="px-4 py-2 border border-solid border-[#13131399] rounded-lg ">
                  <img src="./images/Frame.png" alt="Like" class="w-6 h-6 ">
                </button>

                <!-- Adopt Button -->
                 <button class="px-4 py-2 text-[#0E7A81] text-xl font-bold border border-solid border-[#131313B2] hover:bg-[#0E7A8126] rounded-lg ">Adopt

                 </button>

                 <!-- Details button -->
                <button class="px-4 py-2 text-[#0E7A81] text-xl font-bold border border-solid border-[#131313B2] hover:bg-[#0E7A8126] rounded-lg ">Details

                 </button>

               </div>

              </div>
    `;
  });
};

loadAllCard();
