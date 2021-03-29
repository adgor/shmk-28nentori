let personData = [
  {
    name: "Filan Fisteku",
    title: "Profesor i sh. natyrore",
    email: "example@gmail.com",
    facebook: "https://www.facebook.com/",
  },

  {
    name: "Filan Fisteku",
    title: "Profesor i matematikes",

    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
    twitter: "https://twitter.com/",
  },

  {
    name: "Filan Fisteku",
    title: "Profesor i biologjise",
    email: "example@gmail.com",
    facebook: "https://www.facebook.com/",
  },

  {
    name: "Filan Fisteku",
    title: "Profesor i ed. fizike",

    facebook: "https://www.facebook.com/",
    instagram: "https://www.instagram.com/",
  },

  {
    name: "Filan Fisteku",
    title: "Profesor i gj. angleze",
    email: "example@gmail.com",
  },
  {
    name: "Filan Fisteku",
    title: "Profesor i kimis",
    email: "example@gmail.com",
    facebook: "https://www.facebook.com/",
    twitter: "https://twitter.com/",
  },
];

buildTable(personData);

function buildTable(data) {
  let table = document.getElementById("tableData");

  for (let i = 0; i < data.length; i++) {
    let row = `<tr class="hover:bg-paleSky-50">
      <td class="px-6 py-4 whitespace-nowrap">
        <div class="flex items-center">
            <div class="flex-shrink-0 w-10 h-10">
                <img class="w-10 h-10 rounded-full"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=4&amp;w=256&amp;h=256&amp;q=60"
                    alt="">
            </div>
            <div class="ml-4">
                <div class="text-sm font-medium text-paleSky-900">
                ${data[i].name}
                </div>
            </div>
        </div>
      </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <span class="inline-flex px-2 text-xs font-semibold leading-5 rounded-full text-biscay-500 bg-biscay-100">
        ${data[i].title}
      </span>
    </td>
    <td class="px-6 py-4 whitespace-nowrap">
      <div class="text-sm text-paleSky-900">${
        data[i].email ? `${data[i].email}` : ""
      }</div>
    </td>
    <td class="flex flex-row px-6 py-4 text-sm font-medium text-right whitespace-nowrap">
    
    ${
      data[i].facebook
        ? `<a href=${data[i].facebook} target=”_blank”>
    <svg
      width="30"
      height="30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.478 0A5.466 5.466 0 000 5.478v19.044A5.466 5.466 0 005.478 30H15.8V18.272h-3.102v-4.223H15.8v-3.607c0-2.834 1.832-5.437 6.053-5.437 1.71 0 2.973.164 2.973.164l-.1 3.944S23.439 9.1 22.032 9.1c-1.522 0-1.766.702-1.766 1.866v3.083h4.582l-.2 4.223h-4.382V30h4.257A5.466 5.466 0 0030 24.522V5.478A5.466 5.466 0 0024.522 0H5.478z"
        fill="#3B5998"
      />
    </svg>
  </a>`
        : ""
    }



    ${
      data[i].instagram
        ? `<a href=${data[i].instagram} target=”_blank” class="pl-1">
        <svg width="30" height="30" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
                d="M14.996 9.998A5.013 5.013 0 009.994 15a5.013 5.013 0 005.002 5.002A5.013 5.013 0 0019.998 15a5.013 5.013 0 00-5.002-5.002zM30 15c0-2.071.019-4.124-.098-6.192-.116-2.401-.664-4.533-2.42-6.289C25.72.76 23.593.215 21.19.1 19.122-.018 17.069 0 15 0c-2.071 0-4.124-.019-6.192.098-2.401.116-4.533.664-6.289 2.42C.76 4.28.215 6.407.1 8.81-.018 10.878 0 12.931 0 15c0 2.068-.019 4.124.098 6.192.116 2.401.664 4.533 2.42 6.289 1.76 1.76 3.888 2.304 6.29 2.42 2.07.117 4.123.098 6.191.098 2.071 0 4.124.019 6.192-.098 2.401-.116 4.533-.664 6.289-2.42 1.76-1.76 2.304-3.888 2.42-6.29.12-2.067.098-4.12.098-6.191zm-15.003 7.696A7.686 7.686 0 017.3 15a7.686 7.686 0 017.696-7.696A7.686 7.686 0 0122.693 15a7.686 7.686 0 01-7.697 7.696zm8.012-13.91a1.795 1.795 0 01-1.798-1.798c0-.994.803-1.797 1.798-1.797a1.795 1.795 0 011.661 2.486 1.798 1.798 0 01-1.661 1.109z"
                fill="url(#paint0_linear)" />
            <defs>
                <linearGradient id="paint0_linear" x1="15" y1="0" x2="35.5"
                    y2="39.5" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#333CD1" />
                    <stop offset=".407" stop-color="#CB30A9" />
                    <stop offset=".919" stop-color="#FC7901"
                        stop-opacity="0" />
                </linearGradient>
            </defs>
        </svg>
    </a>`
        : ""
    }
    ${
      data[i].twitter
        ? `<a href=${data[i].twitter} target=”_blank” class="pl-1" >
        <svg width="37" height="30" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                  d="M36.747 3.653a15.079 15.079 0 01-4.33 1.187A7.56 7.56 0 0035.732.67a15.098 15.098 0 01-4.788 1.829A7.53 7.53 0 0025.442.118a7.54 7.54 0 00-7.54 7.539c0 .59.067 1.166.195 1.718C11.832 9.06 6.277 6.059 2.56 1.498a7.505 7.505 0 00-1.021 3.79 7.536 7.536 0 003.354 6.275 7.51 7.51 0 01-3.415-.943v.095c0 3.653 2.598 6.7 6.047 7.392a7.548 7.548 0 01-3.405.13 7.547 7.547 0 007.043 5.235A15.127 15.127 0 011.799 26.7 15.34 15.34 0 010 26.594a21.338 21.338 0 0011.557 3.387c13.867 0 21.45-11.488 21.45-21.45 0-.327-.007-.652-.022-.975a15.324 15.324 0 003.762-3.903z"
                  fill="#55ACEE" />
          </svg>
      </a>`
        : ""
    }
      
    </td>      
    </tr>`;
    table.innerHTML += row;
  }
}
