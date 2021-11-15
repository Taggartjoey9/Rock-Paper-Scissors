const selectionButtons = document.querySelectorAll('[data-selection]')

const SELECTIONS = [
    {
        name: 'rock',
        emoji: '✊🏻',
        beats: 'scissors'
    },
    {
        name: 'paper',
        emoji: '✋🏻',
        beats: 'rock'
    },
    {
        name: 'scissors',
        emoji: '✌🏻',
        beats: 'paper'
    }
]


selectionButtons.forEach(selectionButton => {
    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        const selection = SELECTIONS.find(selection => seletion
        makeselection(selectionName)
    })
})

function makeselection(selection) {
    console.log(selection)
}