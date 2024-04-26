import { getProfiles } from "../api/profiles/profiles.mjs";



export async function createProfilesPageHTML(profiles) {
  const wrapperContainer = document.querySelector("#profilesPage");
  wrapperContainer.innerHTML = ""; // Clear existing content

  // Create container for profiles
  const container = document.createElement("div");
  container.classList.add("row", "d-flex", "justify-content-center");
  wrapperContainer.appendChild(container);

  // Iterate through profiles
  profiles.forEach((profile) => {
    // Create profile card element
    const cardWrap = document.createElement("a");
    cardWrap.classList.add("col-md-12", "col-lg-12", "mt-2", "mb-2");
    cardWrap.href = `/profile/${profile.id}`; // Assuming profile ID is used in the URL
    container.appendChild(cardWrap);

    const profileCard = document.createElement("div");
    profileCard.classList.add("card", "my-custom-card", "h-100");
    cardWrap.appendChild(profileCard);

    // Create image element
    const profileImage = document.createElement("img");
    profileImage.classList.add("card-img-top");
    profileImage.src = profile.avatar; // Assuming avatar is the property holding the image URL
    profileImage.alt = profile.name; // Assuming name is the property holding the image alt text
    profileCard.appendChild(profileImage);

    // Create card body
    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    profileCard.appendChild(cardBody);

    // Create and append profile name
    const profileName = document.createElement("h2");
    profileName.classList.add("display-6");
    profileName.innerText = profile.name;
    cardBody.appendChild(profileName);

    // Create and append profile description
    const profileFollowers = document.createElement("p");
    profileFollowers.innerText = `Followers ${profile.followers.length}`; // Assuming description is the property holding the profile description
    cardBody.appendChild(profileFollowers);

    
  });
}

export async function renderAllProfiles() {
  const profiles = await getProfiles();
  await createProfilesPageHTML(profiles);
}



