const nine = document.getElementById('9am')
const ten = document.getElementById('10am')
const eleven = document.getElementById('11am')
const twelve = document.getElementById('12pm')
const thirteen = document.getElementById('1pm')
const fourteen = document.getElementById('2pm')
const fifteen = document.getElementById('3pm')
const sixteen = document.getElementById('4pm')

function onLoad() {
    const time = document.getElementById('currentDay')
    time.innerText = moment().format("MMM Do YY")
    assignClass()
    if (localStorage.schedule) {
        schedule = JSON.parse(localStorage.getItem('schedule'))
        document.getElementById('9amtext').innerText = schedule[0].entry
        document.getElementById('10amtext').innerText = schedule[1].entry
        document.getElementById('11amtext').innerText = schedule[2].entry
        document.getElementById('12pmtext').innerText = schedule[3].entry
        document.getElementById('1pmtext').innerText = schedule[4].entry
        document.getElementById('2pmtext').innerText = schedule[5].entry
        document.getElementById('3pmtext').innerText = schedule[6].entry
        document.getElementById('4pmtext').innerText = schedule[7].entry
    } else {
        schedule = [
            {
                hour: 9, entry: '', 
            },
            {
                hour: 10, entry: '',
            },
            {
                hour: 11, entry: '',
            },
            {
                hour: 12, entry: '',
            },
            {
                hour: 1, entry: '',
            },
            {
                hour: 2, entry: '',
            },
            {
                hour: 3, entry: '',
            },
            {
                hour: 4, entry: '',
            }
        ]
        
    }
}

onLoad()

function update() {
    schedule = [
        {
            hour: 9, entry: document.getElementById('9amtext').value, 
        },
        {
            hour: 10, entry: document.getElementById('10amtext').value,
        },
        {
            hour: 11, entry: document.getElementById('11amtext').value,
        },
        {
            hour: 12, entry: document.getElementById('12pmtext').value,
        },
        {
            hour: 1, entry: document.getElementById('1pmtext').value,
        },
        {
            hour: 2, entry: document.getElementById('2pmtext').value,
        },
        {
            hour: 3, entry: document.getElementById('3pmtext').value,
        },
        {
            hour: 4, entry: document.getElementById('4pmtext').value,
        }
    ]
   localStorage.setItem('schedule', JSON.stringify(schedule)) 
}

nine.addEventListener('click', update)
ten.addEventListener('click', update)
eleven.addEventListener('click', update)
twelve.addEventListener('click', update)
thirteen.addEventListener('click', update)
fourteen.addEventListener('click', update)
fifteen.addEventListener('click', update)
sixteen.addEventListener('click', update)

function assignClass() {
    var hours = [
        {
            number: 9, element: document.getElementById('9amtext'),
        },
        {
            number: 10, element: document.getElementById('10amtext'),
        },
        {
            number: 11, element: document.getElementById('11amtext'),
        },
        {
            number: 12, element: document.getElementById('12pmtext'),
        },
        {
            number: 13, element: document.getElementById('1pmtext'),
        },
        {
            number: 14, element: document.getElementById('2pmtext'),
        },
        {
            number: 15, element: document.getElementById('3pmtext'),
        },
        {
            number: 16, element: document.getElementById('4pmtext')
        }
    ]
 
    for (i = 0; i < hours.length; i++) {
        console.log(hours[i].number)
        if (hours[i].number < moment().format('HH')) {
            hours[i].element.classList.add('past')
        } else if (hours[i].number == moment().format('HH')) {
            hours[i].element.classList.add('present')
        } else if (hours[i].number > moment().format('HH')) {
            hours[i].element.classList.add('future')
        }
    }
}
