const questions = [
  {
    question: "What does computer hardware refer to?",
    answers: [
      {
        answerText: "Software programs and applications",
        isCorrect: false,
      },
      {
        answerText: "The physical components that make up a computer system",
        isCorrect: true,
      },
      {
        answerText: "Computer networks and internet connectivity",
        isCorrect: false,
      },
      {
        answerText: "Data and information stored on a computer",
        isCorrect: false,
      },
    ],
  },
  {
    question: `Which component is often referred to as the “brain” of the computer?`,
    answers: [
      {
        answerText: "Graphics Processing Unit (GPU)",
        isCorrect: false,
      },
      {
        answerText: "Central Processing Unit (CPU)",
        isCorrect: true,
      },
      {
        answerText: "Random Access Memory (RAM)",
        isCorrect: false,
      },
      {
        answerText: "Motherboard",
        isCorrect: false,
      },
    ],
  },
  {
    question: "What is the main function of the motherboard in a computer?",
    answers: [
      {
        answerText: "Storing data and applications",
        isCorrect: false,
      },
      {
        answerText: "Running software programs",
        isCorrect: false,
      },
      {
        answerText:
          "Connecting and allowing communication between all other components",
        isCorrect: true,
      },
      {
        answerText: "Providing internet connectivity",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "What type of memory is used for temporary storage of data that the CPU needs to access quickly?",
    answers: [
      {
        answerText: "Read-Only Memory (ROM)",
        isCorrect: false,
      },
      {
        answerText: "Hard Disk Drive (HDD)",
        isCorrect: false,
      },
      {
        answerText: "Random Access Memory (RAM)",
        isCorrect: true,
      },
      {
        answerText: "Solid-State Drive (SSD)",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "Which storage device provides permanent storage for data, applications, and the operating system?",
    answers: [
      {
        answerText: "Random Access Memory (RAM)",
        isCorrect: false,
      },
      {
        answerText: "Hard Disk Drive (HDD)",
        isCorrect: true,
      },
      {
        answerText: "Central Processing Unit (CPU)",
        isCorrect: false,
      },
      {
        answerText: "Graphics Processing Unit (GPU)",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "What is the role of the Graphics Processing Unit (GPU) in a computer?",
    answers: [
      {
        answerText: "Executing instructions and processing data",
        isCorrect: false,
      },
      {
        answerText: "Providing internet connectivity",
        isCorrect: false,
      },
      {
        answerText: "Rendering images, videos, and animations",
        isCorrect: true,
      },
      {
        answerText: "Storing and accessing data quickly",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "What is the purpose of the Power Supply Unit (PSU) in a computer?",
    answers: [
      {
        answerText: "Providing internet connectivity",
        isCorrect: false,
      },
      {
        answerText: "Rendering graphics for video games",
        isCorrect: false,
      },
      {
        answerText: "Supplying power to all the components in the computer",
        isCorrect: true,
      },
      {
        answerText: "Storing data and applications",
        isCorrect: false,
      },
    ],
  },
  {
    question: "Which of the following is an example of an input device?",
    answers: [
      {
        answerText: "Monitor",
        isCorrect: false,
      },
      {
        answerText: "Printer",
        isCorrect: false,
      },
      {
        answerText: "Keyboard",
        isCorrect: true,
      },
      {
        answerText: "Speakers",
        isCorrect: false,
      },
    ],
  },
  {
    question: "What type of memory is lost when the computer is turned off?",
    answers: [
      {
        answerText: "Read-Only Memory (ROM)",
        isCorrect: false,
      },
      {
        answerText: "Hard Disk Drive (HDD)",
        isCorrect: false,
      },
      {
        answerText: "Random Access Memory (RAM)",
        isCorrect: true,
      },
      {
        answerText: "Solid-State Drive (SSD)",
        isCorrect: false,
      },
    ],
  },
  {
    question: "What are expansion cards used for in a computer?",
    answers: [
      {
        answerText: "Providing power to the CPU",
        isCorrect: false,
      },
      {
        answerText: "Increasing the storage capacity of the computer",
        isCorrect: false,
      },
      {
        answerText: "Adding extra functionalities to the computer",
        isCorrect: true,
      },
      {
        answerText: "Cooling the computer components",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "Which component allows the computer to connect to a network and access the internet?",
    answers: [
      {
        answerText: "Central Processing Unit (CPU)",
        isCorrect: false,
      },
      {
        answerText: "Graphics Processing Unit (GPU)",
        isCorrect: false,
      },
      {
        answerText: "Network Interface Card (NIC)",
        isCorrect: true,
      },
      {
        answerText: "Random Access Memory (RAM)",
        isCorrect: false,
      },
    ],
  },
  {
    question: "What do cooling systems in a computer prevent?",
    answers: [
      {
        answerText: "Data loss due to power failure",
        isCorrect: false,
      },
      {
        answerText: "Dust and debris from entering the computer",
        isCorrect: false,
      },
      {
        answerText: "Overheating of computer components",
        isCorrect: true,
      },
      {
        answerText: "Accidental spills on the computer",
        isCorrect: false,
      },
    ],
  },
  {
    question: "What is the function of optical drives in a computer?",
    answers: [
      {
        answerText: "Providing internet connectivity",
        isCorrect: false,
      },
      {
        answerText: "Storing and accessing data quickly",
        isCorrect: false,
      },
      {
        answerText: "Reading and writing data from optical discs",
        isCorrect: true,
      },
      {
        answerText: "Rendering graphics for video games",
        isCorrect: false,
      },
    ],
  },
  {
    question:
      "Which device allows you to view the output of a computer’s processing?",
    answers: [
      {
        answerText: "Keyboard",
        isCorrect: false,
      },
      {
        answerText: "Monitor",
        isCorrect: true,
      },
      {
        answerText: "Network Interface Card (NIC)",
        isCorrect: false,
      },
      {
        answerText: "Power Supply Unit (PSU)",
        isCorrect: false,
      },
    ],
  },
  {
    question: "What is the purpose of “Add-ons” in a computer?",
    answers: [
      {
        answerText: "Extending the functionality of the computer’s software",
        isCorrect: true,
      },
      {
        answerText: "Adding extra physical components to the computer",
        isCorrect: false,
      },
      {
        answerText: "Providing internet connectivity",
        isCorrect: false,
      },
      {
        answerText: "Cooling the computer components",
        isCorrect: false,
      },
    ],
  },
];

export default questions;
