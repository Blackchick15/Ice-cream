const boxs = document.querySelectorAll('.works__box');
const controlls = document.querySelectorAll('.controlls');
let boxIndex = 0;

function show(index) {
    boxs[boxIndex].classList.remove('active');
    boxs[index].classList.add('active');
    boxIndex = index;
}

controlls.forEach((e)  => {
    e.addEventListener('click', () => {
        if (event.target.classList.contains('prev')){
            let index = boxIndex - 1;

            if (index <0){
                index = boxs.length - 1;
            }

            show(index)
        } else if (event.target.classList.contains('next'))
        {
            let index = boxIndex + 1;
            if (index >= boxs.length){
                index = 0
            }
            show(index)
        }
    })
})

show(boxIndex)