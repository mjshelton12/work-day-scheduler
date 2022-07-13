var date = $('#currentDay');
var time = $('#currentTime');
var scheduleHour = $('.hour');
var scheduleDes = $('.description');
var saveBtn = $('.saveBtn')

var currentDate = moment().format('MMMM Do YYYY');
var currentHour = moment().format('HH');

console.log(currentHour)


// Puts date at the top

date.text(currentDate);

//Brings forth saved text

var eightSaved = JSON.parse(localStorage.getItem('8am-Event'))
$("#8-text").text(eightSaved)
var nineSaved = JSON.parse(localStorage.getItem('9am-Event'))
$("#9-text").text(nineSaved)
var tenSaved = JSON.parse(localStorage.getItem('10am-Event'))
$("#10-text").text(tenSaved)
var elevenSaved = JSON.parse(localStorage.getItem('11am-Event'))
$("#11-text").text(elevenSaved)
var twelveSaved = JSON.parse(localStorage.getItem('12pm-Event'))
$("#12-text").text(twelveSaved)
var oneSaved = JSON.parse(localStorage.getItem('1pm-Event'))
$("#13-text").text(oneSaved)
var twoSaved = JSON.parse(localStorage.getItem('2pm-Event'))
$("#14-text").text(twoSaved)
var threeSaved = JSON.parse(localStorage.getItem('3pm-Event'))
$("#15-text").text(threeSaved)
var fourSaved = JSON.parse(localStorage.getItem('4pm-Event'))
$("#16-text").text(fourSaved)
var fiveSaved = JSON.parse(localStorage.getItem('5pm-Event'))
$("#17-text").text(fiveSaved)



// Colors the calendar

for (let i = 8; i <= 17; i++){
    var timeBlock = $(`#${i}`)
    var timeBlockNum = parseInt($(`#${i}`).attr('id'))
    var inputEl = timeBlock.siblings('div').children('textarea')

    parseInt($(`#${i}`).attr('id'))

    if (timeBlockNum < currentHour) {
        inputEl.attr('class', 'past calendarInput')
    } if (timeBlockNum == currentHour) {
        inputEl.attr('class', 'present calendarInput')
    } if (timeBlockNum > currentHour) {
        inputEl.attr('class', 'future calendarInput')
    }
}

// Save buttons

$(document).ready(function(){
    $("#8btn").on("click", function(){
        saveEight()
    })
})

function saveEight(){
    var eventText = $.trim($("#8-text").val())
    localStorage.setItem("8am-Event", JSON.stringify(eventText))
}


$(document).ready(function(){
    $("#9btn").on("click", function(){
        saveNine()
    })
})

function saveNine(){
    var eventText = $.trim($("#9-text").val())
    localStorage.setItem("9am-Event", JSON.stringify(eventText))
}

$(document).ready(function(){
    $("#10btn").on("click", function(){
        saveTen()
    })
})

function saveTen(){
    var eventText = $.trim($("#10-text").val())
    localStorage.setItem("10am-Event", JSON.stringify(eventText))
}

$(document).ready(function(){
    $("#11btn").on("click", function(){
        saveEleven()
    })
})

function saveEleven(){
    var eventText = $.trim($("#11-text").val())
    localStorage.setItem("11am-Event", JSON.stringify(eventText))
}

$(document).ready(function(){
    $("#12btn").on("click", function(){
        saveNoon()
    })
})

function saveNoon(){
    var eventText = $.trim($("#12-text").val())
    localStorage.setItem("12pm-Event", JSON.stringify(eventText))
}

$(document).ready(function(){
    $("#1btn").on("click", function(){
        saveOne()
    })
})

function saveOne(){
    var eventText = $.trim($("#13-text").val())
    localStorage.setItem("1pm-Event", JSON.stringify(eventText))
}

$(document).ready(function(){
    $("#2btn").on("click", function(){
        saveTwo()
    })
})

function saveTwo(){
    var eventText = $.trim($("#14-text").val())
    localStorage.setItem("2pm-Event", JSON.stringify(eventText))
}

$(document).ready(function(){
    $("#3btn").on("click", function(){
        saveThree()
    })
})

function saveThree(){
    var eventText = $.trim($("#15-text").val())
    localStorage.setItem("3pm-Event", JSON.stringify(eventText))
}

$(document).ready(function(){
    $("#4btn").on("click", function(){
        saveFour()
    })
})

function saveFour(){
    var eventText = $.trim($("#16-text").val())
    localStorage.setItem("4pm-Event", JSON.stringify(eventText))
}

$(document).ready(function(){
    $("#5btn").on("click", function(){
        saveFive()
    })
})

function saveFive(){
    var eventText = $.trim($("#17-text").val())
    localStorage.setItem("5pm-Event", JSON.stringify(eventText))
}


// Delete button

$(document).ready(function(){
    $("#deleteBtn").on("click", function(){
        console.log("Honor Brighticus")
        clearAll()
    })
})

function clearAll(){
    console.log("butter butter peanut butter")
    $("textarea").empty()
    localStorage.clear()

}

