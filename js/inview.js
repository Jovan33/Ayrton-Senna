                        // IN-VIEW
document.addEventListener("DOMContentLoaded", () => {
    // da li je u veiwportu tj videokrugu browsera
    const obzerver = new IntersectionObserver (entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view');
            return;
            }
        entry.target.classList.remove('in-view');
        });
        });

    const animate = document.querySelectorAll('.animate'); // elemnti sa anmate klasom
    
    animate.forEach((element) => obzerver.observe (element)); // obzerver za te elmente
    });


                        // SKROL DUGME
    let skrolovano = false;  // Gledamo da li je stranica skrolovana

    document.addEventListener('scroll', () => {
      if (!skrolovano) {
        const gore = document.querySelector('.skroldugme');
        gore.classList.add('dugme');  // dodaje klasu
      }
    });