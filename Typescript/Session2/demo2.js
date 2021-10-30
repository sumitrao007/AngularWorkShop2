//json Object
//java script Object Notation
//Key & value
var obj = {
    id: 9,
    "fname": "Sumit",
    lname: "Raokhande"
};
//1 dot operator
//2 square operator
// console.log(`
//     Id  ::${obj.id}
//     fname:: ${obj.fname}
//     lname:: ${obj.lname}
// `)
//2 square operator
// console.log(`
//     Id  ::${obj["id"]}
//     fname:: ${obj['fname']}
//     lname:: ${obj["lname"]}
// `)
//Array of Object
var arrobj = [
    {
        id: 9,
        "fname": "Sumit",
        lname: "Raokhande",
        country: {
            cid: 1,
            cname: 'India'
        },
        month: ["jan", "Feb", "March"],
        result: [
            {
                subj: "M1",
                marks: 40
            },
            {
                subj: "M2",
                marks: 55
            },
            {
                subj: "M3",
                marks: 65
            }
        ]
    },
    {
        id: 6,
        "fname": "Kiran",
        lname: "Raokhande",
        country: {
            cid: 2,
            cname: 'US'
        },
        month: ["jan", "Feb", "March"],
        result: [
            {
                subj: "M1",
                marks: 45
            },
            {
                subj: "M2",
                marks: 85
            },
            {
                subj: "M3",
                marks: 95
            }
        ]
    },
    {
        id: 3,
        "fname": "Spruha",
        lname: "Raokhande",
        country: {
            cid: 3,
            cname: 'Sount Africa'
        },
        month: ["jan", "Feb", "March"],
        result: [
            {
                subj: "M1",
                marks: 55
            },
            {
                subj: "M2",
                marks: 75
            },
            {
                subj: "M3",
                marks: 55
            }
        ]
    }
];
for (var i = 0; i < arrobj.length; i++) {
    console.log("\n            ----------------------------\n            Id  : " + arrobj[i].id + "\n            Fname :" + arrobj[i].fname + "\n            Lname : " + arrobj[i].lname + "\n            Country:" + arrobj[i].country.cname + "\n            Month: " + arrobj[i].month.join("  ") + "\n    ");
    for (var j = 0; j < arrobj[i].result.length; j++) {
        console.log("\n            Result\n            Subject : " + arrobj[i].result[j].subj + "\n            Marks   : " + arrobj[i].result[j].marks + "\n       ");
    }
}
