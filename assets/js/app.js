document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;
    const colorBoxes = document.querySelectorAll(".color-box .color");
    const hexTexts = document.querySelectorAll(".hex");
    const generateBtn = document.querySelector(".generate");
    const template = document.querySelector(".template");
    const moreBtns = document.querySelectorAll(".more");

    const colorPickers = [
        document.getElementById('color-picker-1'),
        document.getElementById('color-picker-2'),
        document.getElementById('color-picker-3')
    ];

    const gradientToggle = document.getElementById('gradient-toggle');

    const genHex = () => {
        const symbols = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += symbols[Math.floor(Math.random() * 16)];
        }
        return color;
    };

    const updateUI = (colors) => {
        root.style.setProperty('--color-1', colors[0]);
        root.style.setProperty('--color-2', colors[1]);
        root.style.setProperty('--color-3', colors[2]);
        // Set the text color for cards and buttons from color 1
        root.style.setProperty('--text-color-dynamic', colors[0]);
        // Set the hover background from color 1 and hover text from color 3
        root.style.setProperty('--more-btn-hover-bg', colors[0]);
        root.style.setProperty('--more-btn-hover-color', colors[2]);

        colorBoxes.forEach((box, index) => {
            box.style.backgroundColor = colors[index];
        });

        hexTexts.forEach((text, index) => {
            text.textContent = colors[index];
        });

        colorPickers.forEach((picker, index) => {
            picker.value = colors[index];
        });

        updateTemplateBackground();
    };

    const updateTemplateBackground = () => {
        const color1 = root.style.getPropertyValue('--color-1');
        const color2 = root.style.getPropertyValue('--color-2');

        if (gradientToggle.checked) {
            template.style.background = `linear-gradient(45deg, ${color1}, ${color2})`;
        } else {
            template.style.background = 'transparent'; // Fallback for the split view
        }
        // The .background-top and .background-bottom are now controlled by CSS variables
        // so they update automatically. We just need to toggle the gradient.
    };

    const generateNewColors = () => {
        const newColors = [genHex(), genHex(), genHex()];
        updateUI(newColors);
    };

    const copyToClipboard = (e) => {
        const textToCopy = e.target.textContent;
        navigator.clipboard.writeText(textToCopy).then(() => {
            const originalText = e.target.textContent;
            e.target.textContent = 'Copied!';
            setTimeout(() => {
                e.target.textContent = originalText;
            }, 1000);
        }).catch(err => {
            console.error('Failed to copy text: ', err);
        });
    };

    // Event Listeners
    generateBtn.addEventListener('click', generateNewColors);
    hexTexts.forEach(text => text.addEventListener('click', copyToClipboard));
    gradientToggle.addEventListener('change', updateTemplateBackground);

    colorPickers.forEach((picker, index) => {
        picker.addEventListener('input', (e) => {
            const newColors = colorPickers.map(p => p.value);
            updateUI(newColors);
        });
    });

    // Initial load
    const initialColors = colorPickers.map(p => p.value);
    updateUI(initialColors);
});