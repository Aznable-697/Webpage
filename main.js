// ________  ________ _______  ________ _______  _______  _______  _______    _______ ________ _________ _______ ________  _______ ________
// |\     /||\     /|\__   __/\__   __/(  ____ \| \    /\(  ____ \(  ____ )  (  ____ \\__   __/|\     /|(  __  \ \__   __/(  ___  )(  ____ \
// | )   ( || )   ( |   ) (      ) (   | (    \/|  \  / /| (    \/| (    )|  | (    \/   ) (   | )   ( || (  \  )   ) (   | (   ) || (    \/
// | | _ | || (___) |   | |      | |   | (__    |  (_/ / | (__    | (____)|  | (_____    | |   | |   | || |   ) |   | |   | |   | || (_____ 
// | |( )| ||  ___  |   | |      | |   |  __)   |   _ (  |  __)   |     __)  (_____  )   | |   | |   | || |   | |   | |   | |   | |(_____  )
// | || || || (   ) |   | |      | |   | (      |  ( \ \ | (      | (\ (           ) |   | |   | |   | || |   ) |   | |   | |   | |      ) |
// | () () || )   ( |___) (___   | |   | (____/\|  /  \ \| (____/\| ) \ \__  /\____) |   | |   | (___) || (__/  )___) (___| (___) |/\____) |
// (_______)|/     \|\_______/   )_(   (_______/|_/    \/(_______/|/   \__/  \_______)   )_(   (_______)(______/ \_______/(_______)\_______)
                                                                                                                                        


const hamburgerMenu = document.querySelector('#navigation .nav-icon');

const navContent = document.querySelector('#nav-content');

const closeNavButton = document.querySelector('#nav-content .close-btn');

const navLinks = document.querySelectorAll ('#nav-content nav ul li a');

const scrollButton = document.querySelector('.scroll-top');


if(scrollButton) {
    window.addEventListener('scroll', ()=> {
        if(pageYOffset > (window.innerHeight * 1.2)){
            scrollButton.style.display = 'flex';
        } else {
            scrollButton.style.display = 'none';
        }
    });
    scrollButton.addEventListener('click', ()=> {
        window.scrollTo(0, 0)
    })
}



hamburgerMenu.addEventListener('click', ()=> {
    navContent.classList.add('show');
    document.body.style.overflow="hidden";
})

closeNavButton.addEventListener('click', ()=> {
    navContent.classList.remove('show');
    document.body.style.overflow="initial";
})

navLinks.forEach( link => {
    link.addEventListener('click', () => {
        navContent.classList.remove('show');
        document.body.style.overflow="initial";
    })
})