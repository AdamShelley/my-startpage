const focusInput = document.querySelector('#focus-input');
const focusContainer = document.querySelector('.focus');

const getLocalStorageGoal = () => {
    const goal = JSON.parse(localStorage.getItem('goal'));

    const today = new Date();
    const isSameDay = goal &&
        new Date(goal.date).getFullYear() === today.getFullYear() &&
        new Date(goal.date).getMonth() === today.getMonth() &&
        new Date(goal.date).getDate() === today.getDate();

        console.log(isSameDay)
    if (isSameDay) {
        focusInput.value = goal.goal;
        focusContainer.classList.add('no-border');
    }
}


focusInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const goal = e.target.value;

        if (goal) {
            localStorage.setItem('goal',JSON.stringify({
                date: new Date(),
                goal
            }));
            focusContainer.classList.add('no-border');
            focusInput.classList.add('flash-text');

            setTimeout(() => {
                focusInput.classList.remove('flash-text');
            }, 500);

            focusInput.blur()
        }
    }
})

getLocalStorageGoal()