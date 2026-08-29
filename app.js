/* =====================================
   BFL CLAN WEBSITE
   Main JavaScript
===================================== */

const players = [

  {
    name: "OLUVIC",
    role: "Acting Guild Leader",
    category: "leadership",
    achievement: "🏆 Best Player",
    title: "Rusher",
    level: "Not added yet",
    uid: "Not added yet",
    bio: "Very active BFL CLAN player and Acting Guild Leader."
  },

  {
    name: "Jesse",
    role: "Owner",
    category: "leadership",
    achievement: "👑 Clan Owner",
    title: "Taper",
    level: "Not added yet",
    uid: "Not added yet",
    bio: "Owner of BFL CLAN."
  },

  {
    name: "Papi",
    role: "Elder",
    category: "leadership",
    achievement: "🔥 Taper",
    title: "Taper",
    level: "Not added yet",
    uid: "Not added yet",
    bio: "BFL CLAN Elder."
  },

  {
    name: "Wanted",
    role: "Elder",
    category: "leadership",
    achievement: "⭐ Elder",
    title: "Elder",
    level: "Not added yet",
    uid: "Not added yet",
    bio: "BFL CLAN Elder."
  },

  {
    name: "Zammy",
    role: "Member",
    category: "members",
    achievement: "🎯 Best Sniper",
    title: "Best Sniper",
    level: "Not added yet",
    uid: "Not added yet",
    bio: "BFL CLAN sniper."
  },

  {
    name: "Emzy",
    role: "Member",
    category: "members",
    achievement: "",
    title: "",
    level: "Not added yet",
    uid: "Not added yet",
    bio: "BFL CLAN member."
  },

  {
    name: "Eunan",
    role: "Member",
    category: "members",
    achievement: "",
    title: "",
    level: "Not added yet",
    uid: "Not added yet",
    bio: "BFL CLAN member."
  },

  {
    name: "Jomi",
    role: "Member",
    category: "members",
    achievement: "",
    title: "",
    level: "Not added yet",
    uid: "Not added yet",
    bio: "BFL CLAN member."
  },

  {
    name: "Wire",
    role: "Member",
    category: "members",
    achievement: "",
    title: "",
    level: "Not added yet",
    uid: "Not added yet",
    bio: "BFL CLAN member."
  },

  {
    name: "Ethan",
    role: "Member",
    category: "members",
    achievement: "",
    title: "",
    level: "Not added yet",
    uid: "Not added yet",
    bio: "BFL CLAN member."
  },

  {
    name: "Tizzy",
    role: "Member",
    category: "members",
    achievement: "",
    title: "",
    level: "Not added yet",
    uid: "Not added yet",
    bio: "BFL CLAN member."
  },

  {
    name: "Lino",
    role: "Member",
    category: "members",
    achievement: "",
    title: "",
    level: "Not added yet",
    uid: "Not added yet",
    bio: "BFL CLAN member."
  },

  {
    name: "Blu",
    role: "Member",
    category: "members",
    achievement: "",
    title: "",
    level: "Not added yet",
    uid: "Not added yet",
    bio: "BFL CLAN member."
  },

  {
    name: "Shadow",
    role: "Member",
    category: "members",
    achievement: "",
    title: "",
    level: "Not added yet",
    uid: "Not added yet",
    bio: "BFL CLAN member."
  },

  {
    name: "Hunch",
    role: "Member",
    category: "members",
    achievement: "🎯 Taper",
    title: "Taper",
    level: "Not added yet",
    uid: "Not added yet",
    bio: "BFL CLAN member."
  }

];


/* =====================================
   CONTACTS
===================================== */

const contacts = [

  {
    name: "Jesse",
    platform: "WhatsApp",
    value: "09078892012",
    icon: "💬"
  },

  {
    name: "Jesse",
    platform: "Telegram",
    value: "09078892012",
    icon: "✈️"
  },

  {
    name: "OLUVIC",
    platform: "Telegram",
    value: "OLUVIC",
    icon: "✈️"
  },

  {
    name: "Jesse",
    platform: "TikTok",
    value: "@jessereborn43",
    icon: "🎵"
  },

  {
    name: "OLUVIC",
    platform: "WhatsApp",
    value: "8085944975",
    icon: "💬"
  }

];


/* =====================================
   TOURNAMENTS
===================================== */

const tournaments = [

  {
    name: "BFL CLAN Tournament",
    status: "Coming Soon",
    date: "Date will be announced",
    description: "Tournament information will appear here."
  }

];


/* =====================================
   ANNOUNCEMENTS
===================================== */

const announcements = [

  {
    title: "Welcome to BFL CLAN",
    date: "2026",
    text: "Welcome to the official BFL CLAN website."
  },

  {
    title: "55 Members Strong",
    date: "2026",
    text: "BFL CLAN currently has 55 members."
  }

];


/* =====================================
   ELEMENTS
===================================== */

const entryScreen =
  document.getElementById("entryScreen");

const website =
  document.getElementById("website");

const enterClanBtn =
  document.getElementById("enterClanBtn");

const playerGrid =
  document.getElementById("playerGrid");

const leadershipGrid =
  document.getElementById("leadershipGrid");

const tournamentList =
  document.getElementById("tournamentList");

const announcementList =
  document.getElementById("announcementList");

const contactList =
  document.getElementById("contactList");

const profileModal =
  document.getElementById("profileModal");

const profileContent =
  document.getElementById("profileContent");

const adminModal =
  document.getElementById("adminModal");

const dashboardModal =
  document.getElementById("dashboardModal");

const menuButton =
  document.getElementById("menuButton");

const navigation =
  document.getElementById("navigation");

const searchBox =
  document.getElementById("playerSearch");


/* =====================================
   ENTRY SCREEN
===================================== */

if (enterClanBtn) {

  enterClanBtn.addEventListener(
    "click",
    () => {

      entryScreen.classList.add("hidden");

      website.classList.remove("hidden");

      window.scrollTo(0, 0);

    }
  );

}


/* =====================================
   INITIALIZE
===================================== */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    renderPlayers(players);

    renderLeadership();

    renderTournaments();

    renderAnnouncements();

    renderContacts();

  }
);


/* =====================================
   PLAYER CARDS
===================================== */

function renderPlayers(list) {

  if (!playerGrid) return;

  playerGrid.innerHTML = "";

  if (list.length === 0) {

    playerGrid.innerHTML =
      "<p>No players found.</p>";

    return;

  }


  list.forEach(
    (player, index) => {

      const card =
        document.createElement("div");

      card.className =
        "player-card";

      card.dataset.index = index;

      const initials =
        player.name
          .substring(0, 2)
          .toUpperCase();


      card.innerHTML = `

        <div class="player-avatar">
          ${initials}
        </div>

        <h3>
          ${escapeHTML(player.name)}
        </h3>

        <div class="player-role">
          ${escapeHTML(player.role)}
        </div>

        ${
          player.achievement
            ?
          `
            <div class="player-achievement">
              ${escapeHTML(player.achievement)}
            </div>
          `
            :
          ""
        }

        <div class="player-arrow">
          →
        </div>

      `;


      card.addEventListener(
        "click",
        () => openProfile(player)
      );


      playerGrid.appendChild(card);

    }
  );

}


/* =====================================
   LEADERSHIP
===================================== */

function renderLeadership() {

  if (!leadershipGrid) return;

  const leaders =
    players.filter(
      player =>
        player.category === "leadership"
    );

  leadershipGrid.innerHTML = "";


  leaders.forEach(
    player => {

      const card =
        document.createElement("div");

      card.className =
        "player-card";


      card.innerHTML = `

        <div class="player-avatar">
          👑
        </div>

        <h3>
          ${escapeHTML(player.name)}
        </h3>

        <div class="player-role">
          ${escapeHTML(player.role)}
        </div>

        ${
          player.achievement
          ?
          `
            <div class="player-achievement">
              ${escapeHTML(player.achievement)}
            </div>
          `
          :
          ""
        }

        <div class="player-arrow">
          →
        </div>

      `;


      card.addEventListener(
        "click",
        () => openProfile(player)
      );


      leadershipGrid.appendChild(card);

    }
  );

}


/* =====================================
   PROFILE MODAL
===================================== */

function openProfile(player) {

  if (!profileModal) return;


  const initials =
    player.name
      .substring(0, 2)
      .toUpperCase();


  profileContent.innerHTML = `

    <div class="profile-avatar">
      ${initials}
    </div>

    <h2 class="profile-name">
      ${escapeHTML(player.name)}
    </h2>

    <div class="profile-role">
      ${escapeHTML(player.role)}
    </div>

    <div class="profile-info">
      <strong>🏆 Achievement</strong><br>
      ${escapeHTML(player.achievement || "None added")}
    </div>

    <div class="profile-info">
      <strong>🔥 Specialty</strong><br>
      ${escapeHTML(player.title || "Not added yet")}
    </div>

    <div class="profile-info">
      <strong>🎮 Free Fire Level</strong><br>
      ${escapeHTML(player.level)}
    </div>

    <div class="profile-info">
      <strong>🆔 UID</strong><br>
      ${escapeHTML(player.uid)}
    </div>

    <div class="profile-info">
      <strong>About</strong><br>
      ${escapeHTML(player.bio)}
    </div>

  `;


  profileModal.classList.remove("hidden");

}


/* =====================================
   CLOSE PROFILE
===================================== */

document.addEventListener(
  "click",
  event => {

    if (
      event.target.matches(
        "[data-close-profile]"
      )
    ) {

      profileModal.classList.add("hidden");

    }

  }
);


/* =====================================
   SEARCH
===================================== */

if (searchBox) {

  searchBox.addEventListener(
    "input",
    () => {

      const search =
        searchBox.value
          .toLowerCase()
          .trim();


      const filtered =
        players.filter(
          player =>
            player.name
              .toLowerCase()
              .includes(search)
        );


      renderPlayers(filtered);

    }
  );

}


/* =====================================
   FILTER BUTTONS
===================================== */

document
  .querySelectorAll(".filter")
  .forEach(
    button => {

      button.addEventListener(
        "click",
        () => {

          document
            .querySelectorAll(".filter")
            .forEach(
              btn =>
                btn.classList.remove("active")
            );


          button.classList.add("active");


          const filter =
            button.dataset.filter;


          if (filter === "all") {

            renderPlayers(players);

          }

          else if (
            filter === "leadership"
          ) {

            renderPlayers(
              players.filter(
                player =>
                  player.category ===
                  "leadership"
              )
            );

          }

          else if (
            filter === "members"
          ) {

            renderPlayers(
              players.filter(
                player =>
                  player.category ===
                  "members"
              )
            );

          }

          else if (
            filter === "achievement"
          ) {

            renderPlayers(
              players.filter(
                player =>
                  player.achievement
              )
            );

          }

        }
      );

    }
  );


/* =====================================
   TOURNAMENTS
===================================== */

function renderTournaments() {

  if (!tournamentList) return;

  tournamentList.innerHTML = "";


  tournaments.forEach(
    tournament => {

      const card =
        document.createElement("div");

      card.className =
        "tournament-card";


      card.innerHTML = `

        <span class="tournament-status">
          ${escapeHTML(tournament.status)}
        </span>

        <h3>
          ${escapeHTML(tournament.name)}
        </h3>

        <p>
          ${escapeHTML(tournament.description)}
        </p>

        <small>
          📅 ${escapeHTML(tournament.date)}
        </small>

      `;


      tournamentList.appendChild(card);

    }
  );

}


/* =====================================
   ANNOUNCEMENTS
===================================== */

function renderAnnouncements() {

  if (!announcementList) return;

  announcementList.innerHTML = "";


  announcements.forEach(
    announcement => {

      const card =
        document.createElement("div");

      card.className =
        "announcement-card";


      card.innerHTML = `

        <small>
          ${escapeHTML(announcement.date)}
        </small>

        <h3>
          ${escapeHTML(announcement.title)}
        </h3>

        <p>
          ${escapeHTML(announcement.text)}
        </p>

      `;


      announcementList.appendChild(card);

    }
  );

}


/* =====================================
   CONTACTS
===================================== */

function renderContacts() {

  if (!contactList) return;

  contactList.innerHTML = "";


  contacts.forEach(
    contact => {

      const card =
        document.createElement("a");


      card.className =
        "contact-card";


      let link = "#";


      if (
        contact.platform ===
        "WhatsApp"
      ) {

        const number =
          contact.value
            .replace(/\D/g, "");


        link =
          "https://wa.me/" +
          number;

      }


      else if (
        contact.platform ===
        "TikTok"
      ) {

        link =
          "https://www.tiktok.com/" +
          contact.value;

      }


      card.href = link;


      if (link !== "#") {

        card.target = "_blank";

        card.rel =
          "noopener noreferrer";

      }


      card.innerHTML = `

        <strong>
          ${contact.icon}
          ${escapeHTML(contact.platform)}
        </strong>

        <small>
          ${escapeHTML(contact.name)}
          <br>
          ${escapeHTML(contact.value)}
        </small>

      `;


      contactList.appendChild(card);

    }
  );

}


/* =====================================
   MOBILE MENU
===================================== */

if (menuButton) {

  menuButton.addEventListener(
    "click",
    () => {

      navigation.classList.toggle(
        "open"
      );

    }
  );

}


document
  .querySelectorAll(
    "#navigation a"
  )
  .forEach(
    link => {

      link.addEventListener(
        "click",
        () => {

          navigation.classList.remove(
            "open"
          );

        }
      );

    }
  );


/* =====================================
   ADMIN LOGIN
===================================== */

const adminLoginButton =
  document.getElementById(
    "adminLoginButton"
  );

const loginButton =
  document.getElementById(
    "loginButton"
  );

const logoutButton =
  document.getElementById(
    "logoutButton"
  );

const adminUsername =
  document.getElementById(
    "adminUsername"
  );

const adminPassword =
  document.getElementById(
    "adminPassword"
  );

const loginMessage =
  document.getElementById(
    "loginMessage"
  );


if (adminLoginButton) {

  adminLoginButton.addEventListener(
    "click",
    () => {

      adminModal.classList.remove(
        "hidden"
      );

    }
  );

}


if (loginButton) {

  loginButton.addEventListener(
    "click",
    () => {

      const username =
        adminUsername.value
          .trim()
          .toLowerCase();

      const password =
        adminPassword.value;


      /*
        DEMO LOGIN ONLY.

        This is NOT secure enough
        for a real public website.
      */

      const validUser =
        username === "jesse" ||
        username === "oluvic";


      const validPassword =
        password ===
        "JESSEXOLUVIC";


      if (
        validUser &&
        validPassword
      ) {

        loginMessage.textContent =
          "Login successful!";

        adminModal.classList.add(
          "hidden"
        );

        dashboardModal.classList.remove(
          "hidden"
        );

      }

      else {

        loginMessage.textContent =
          "Incorrect admin details.";

      }

    }
  );

}


/* =====================================
   LOGOUT
===================================== */

if (logoutButton) {

  logoutButton.addEventListener(
    "click",
    () => {

      dashboardModal.classList.add(
        "hidden"
      );

      adminUsername.value = "";

      adminPassword.value = "";

      loginMessage.textContent = "";

    }
  );

}


/* =====================================
   CLOSE ADMIN MODALS
===================================== */

document.addEventListener(
  "click",
  event => {

    if (
      event.target.matches(
        "[data-close-admin]"
      )
    ) {

      adminModal.classList.add(
        "hidden"
      );

    }


    if (
      event.target.matches(
        "[data-close-dashboard]"
      )
    ) {

      dashboardModal.classList.add(
        "hidden"
      );

    }

  }
);


/* =====================================
   DASHBOARD BUTTONS
===================================== */

const addPlayerButton =
  document.getElementById(
    "addPlayerButton"
  );

const addTournamentButton =
  document.getElementById(
    "addTournamentButton"
  );

const addAnnouncementButton =
  document.getElementById(
    "addAnnouncementButton"
  );


if (addPlayerButton) {

  addPlayerButton.addEventListener(
    "click",
    () => {

      alert(
        "Player management will be connected to the secure database in the next version."
      );

    }
  );

}


if (addTournamentButton) {

  addTournamentButton.addEventListener(
    "click",
    () => {

      alert(
        "Tournament management will be connected to the secure database in the next version."
      );

    }
  );

}


if (addAnnouncementButton) {

  addAnnouncementButton.addEventListener(
    "click",
    () => {

      alert(
        "Announcement management will be connected to the secure database in the next version."
      );

    }
  );

}


/* =====================================
   ESCAPE HTML
===================================== */

function escapeHTML(value) {

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

}
