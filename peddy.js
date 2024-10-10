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
    btnContainer.innerHTML += `<button onclick="loadCategoryPets('${item.category}',this)"
            class="category-btn w-fit px-20 py-6 flex items-center gap-4 border border-solid border-[#0E7A8126] rounded-2xl"
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
  cardContainer.innerHTML = "";
  cardContainer.innerHTML = `

  <span class="loading loading-spinner loading-lg"></span>`;

  setTimeout(() => {
    cardContainer.innerHTML = "";

    if (categories.length === 0) {
      cardContainer.innerHTML = `
      <div>No Data found</div>
      `;
      return;
    }

    categories.forEach((item) => {
      cardContainer.innerHTML += `      
      <div>
                  <img src=${item.image} alt="Dogs" class="max-w-full h-auto">
                  
                 <!-- details -->
  
                 <div class="mt-8">
                 <h4 class="text-[#131313] text-xl font-bold">${
                   item.pet_name
                 }</h4>
  
                 <ul class="mt-2 pb-4 text-[#131313B2] text-base space-y-2 border-b border-b-[#131313B2]">
                  <li>Breed: ${item.breed || "Not Available"}</li>
                  <li>Birth: ${item.date_of_birth || "Not Available"}</li>
                  <li>Gender: ${item.gender || "Not Available"}</li>
                  <li>Price : ${item.price || "Not Available"}</li>
                 </ul>
                 </div>
  
                 <!-- card buttons -->
  
                 <div class="mt-4 flex items-center justify-between gap-1">
  
                  <!-- like button -->
  
                  <button onclick="likeBtnFunc(${item.petId})"
                    class="px-4 py-2 border border-solid border-[#13131399] rounded-lg ">
                    <img src="./images/Frame.png" alt="Like" class="w-6 h-6 ">
                  </button>
  
                  <!-- Adopt Button -->
                   <button onclick="adoptBtnFunc(this)" class="px-4 py-2 text-[#0E7A81] text-xl font-bold border border-solid border-[#131313B2] hover:bg-[#0E7A8126] rounded-lg ">Adopt
  
                   </button>
  
                   <!-- Details button -->
                  <button class="px-4 py-2 text-[#0E7A81] text-xl font-bold border border-solid border-[#131313B2] hover:bg-[#0E7A8126] rounded-lg ">Details
  
                   </button>
  
                 </div>
  
                </div>
      `;
    });
  }, 2000);
};

loadAllCard();

const loadCategoryPets = (category, element) => {
  allCategoryBtn = document.querySelectorAll(".category-btn");
  allCategoryBtn.forEach((btn) => btn.classList.remove("active"));
  element.classList.add("active");

  // load category pets displayAllCard(data.data)
  // https://openapi.programming-hero.com/api/peddy/category/dog
  fetch(`https://openapi.programming-hero.com/api/peddy/category/${category}`)
    .then((res) => res.json())
    .then((data) => displayAllCard(data.data));
};

const sortBtn = document.getElementById("sort-by-price");
sortBtn.addEventListener("click", () => {
  fetch("https://openapi.programming-hero.com/api/peddy/pets")
    .then((res) => res.json())
    .then((data) =>
      displayAllCard(data.pets.sort((obj1, obj2) => obj2.price - obj1.price))
    );
});

const likeBtnFunc = (petId) => {
  // https://openapi.programming-hero.com/api/peddy/pet/1
  fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`)
    .then((res) => res.json())
    .then((data) => addImageToGrid(data.petData));

  const addImageToGrid = (petData) => {
    const imageContainer = document.getElementById("image-container");
    imageContainer.innerHTML += `
    <div class="max-w-[7.75rem]">
      <img class="max-w-full h-auto" src="${petData.image}" alt="${petData.pet_name}">
    </div>
    `;
  };
};

const adoptBtnFunc = (element) => {
  element.textContent = "Adopted";
};
