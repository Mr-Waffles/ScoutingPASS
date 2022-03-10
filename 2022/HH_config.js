var config_data = `{
  "title": "Scouting PASS 2022",
  "page_title": "Rapid React",
  "elements":{
    "prematch": {
      "Scouter Initials": {
        "code":"s",
        "type":"scouter",
        "size":5,
        "maxSize":5,
        "required":"true"
      },
      "Event":{
        "code":"e",
        "type":"event",
        "defaultValue":"2022flwp",
        "required":"true",
        "disabled":"true"
      },
      "Match Level":{
        "code":"l",
        "type":"level",
        "choices":{
          "qm":"Quals<br>",
          "ef":"Eighth-Final<br>",
          "qf":"Quarter-Final<br>",
          "sf":"Semi-Final<br>",
          "f":"Final"
        },
        "defaultValue":"qm",
        "required":"true"
      },
      "Match #":{
        "code":"m",
        "type":"match",
        "min":1,
        "max":100,
        "required":"true"
      },
     "Robot": {
        "code":"r",
        "type":"robot",
        "choices":{
          "r1":"Red-1",
          "b1":"Blue-1<br>",
          "r2":"Red-2",
          "b2":"Blue-2<br>",
          "r3":"Red-3",
          "b3":"Blue-3"
        },
        "required":"true"
      },
      "Team #": {
        "code":"t",
        "type":"team",
        "min":1,
        "max":99999
      },
      "Auto Start Position": {
        "code":"as",
        "title": "Auto Start Position",
        "type":"field_image",
        "filename":"2022/field_image.png"
      }
    },
    "auton": {
      "Taxi": {
        "code": "taxi",
        "title": "Taxied?",
        "type": "bool"
      },
      "Upper Cargo Scored": {
        "code": "aton upper",
        "title": "Upper Cargo Scored",
        "type": "counter"
      },
      "Lower Cargo Scored": {
        "code": "aton lower",
        "title": "Lower Cargo Scored",
        "type": "counter"
      },
      "Auto Acquired Cargo": {
        "code": "auton got cargo",
        "title": "Picked up more cargo?",
        "type": "bool"
      }
    },
    "teleop": {
      "Upper Cargo Scored": {
        "code": "tele upper",
        "title": "Upper Cargo Scored",
        "type": "counter"
      },
      "Upper Cargo Missed": {
        "code": "tele upper missed",
        "title": "Upper Cargo Missed",
        "type": "counter"
      },
      "Lower Cargo Scored": {
        "code": "tele lower",
        "title": "Lower Cargo Scored",
        "type": "counter"
      },
      "Lower Cargo Missed": {
        "code": "tele lower missed",
        "title": "Lower Cargo Missed",
        "type": "counter"
      },
      "Was Defended": {
        "code": "was defended",
        "title": "Was Defended",
        "type": "bool"
      },
      "Shot from launchpad?": {
        "code": "launchpad",
        "title": "Shot from launchpad?",
        "type": "bool"
      },
      "Cargo Intake From": {
        "code": "cargo Intake",
        "title": "Cargo Intake From",
        "type": "radio",
        "choices": {
          "t": "Terminal<br>",
          "g": "Ground<br>",
          "b": "Both<br>",
          "x": "Not Attempted"
        },
        "defaultValue": "x"
      },
      "Shooting Spot": {
        "code": "shot-pos",
        "title": "Shooting Spot",
        "type": "field_image",
        "filename": "2022/field_image.png"
      }
    },
    "endgame": {
      "Climb": {
        "code": "c",
        "title": "Climb",
        "type": "radio",
        "choices": {
          "l": "Low<br>",
          "m": "Mid<br>",
          "h": "High<br>",
          "t": "Traversal<br>",
          "f": "Attempted but failed<br>",
          "x": "Not attempted"
        },
        "defaultValue": "x"
      },
      "If climb failed,<br>Last successful rung,<br>if any": {
        "code": "last rung",
        "title": "If climb failed,<br>last successful rung,<br>if any",
        "type": "radio",
        "choices": {
          "l": "Low<br>",
          "m": "Mid<br>",
          "h": "High<br>",
          "t": "Traversal<br>",
          "f": "No successful rung<br>",
          "x": "n/a"
        },
        "defaultValue": "x"
      },
      "Started Climb before Endgame": {
        "code": "early climb",
        "title": "Started climb before EndGame",
        "type": "bool"
      },
      "Num of Robots Climbed": {
        "code": "climers",
        "title": "# of alliance bots climbed",
        "type": "counter"
      }
    },
    "postmatch": {
      "Driver Skill": {
        "code": "driver skill",
        "title": "Driver Skill",
        "type": "radio",
        "choices": {
          "n": "Not Effective<br>",
          "a": "Average<br>",
          "v": "Very Effective<br>",
          "x": "Not Observed"
        },
        "defaultValue": "x"
      },
      "Defense Rating": {
        "code": "defense rating",
        "title": "Defense Rating",
        "type": "radio",
        "choices": {
          "n": "Not Effective<br>",
          "a": "Average<br>",
          "v": "Very Effective<br>",
          "x": "Not Observed"
        },
        "defaultValue": "x"
      },
      "Shot enemy balls away?": {
        "code": "enemy ball away",
        "title": "Shot enemy balls away?",
        "type": "bool"
      },
      "Died/Tipped": {
        "code": "died",
        "title": "Died/Tipped",
        "type": "bool"
      },
      "Card Foul": {
        "code": "card foul",
        "title": "Yellow/Red Card",
        "type": "bool"
      },
      "Comments": {
        "code": "comments",
        "title": "Comments",
        "type": "text",
        "size": 15,
        "maxSize": 50
      },
      "Speed": {
        "code": "speed",
        "title": "Speed",
        "type": "radio",
        "choices": {
          "f": "Fast<br>",
          "a": "Average<br>",
          "s": "Slow<br>"
        },
        "defaultValue": "a"
      }
    }
  }
}`;