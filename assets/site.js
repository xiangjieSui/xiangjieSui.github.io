
        const menuButton = document.querySelector('.menu-toggle');
        const menu = document.querySelector('.nav-links');

        menuButton.addEventListener('click', () => {
            const isOpen = menu.classList.toggle('is-open');
            menuButton.setAttribute('aria-expanded', String(isOpen));
            menuButton.textContent = isOpen ? 'Close' : 'Menu';
        });

        menu.querySelectorAll('a').forEach((link) => {
            link.addEventListener('click', () => {
                menu.classList.remove('is-open');
                menuButton.setAttribute('aria-expanded', 'false');
                menuButton.textContent = 'Menu';
            });
        });

        document.querySelectorAll('.application-link').forEach((link) => {
            const program = link.dataset.program;
            const subject = `${link.dataset.subject} - [Your Name]`;
            const body = [
                'Dear Dr. Sui,',
                '',
                'My name is [Your Name], and I am currently [your programme/position] at [your institution].',
                `I am writing to inquire about ${program.toLowerCase()} opportunities in the Visual Perceptual Research Group.`,
                '',
                'Research interests: [briefly describe your interests]',
                'Relevant experience: [briefly describe projects, skills, or publications]',
                'Expected start date: [month and year]',
                '',
                'I have attached my CV and transcript for your reference.',
                '',
                'Best regards,',
                '[Your Name]'
            ].join('\n');

            link.href = `mailto:xjsui@cityu.edu.mo?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        });

        document.getElementById('year').textContent = new Date().getFullYear();
