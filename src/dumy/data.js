export const ThemeMode = [
  {
    "id": "1",
    "color": "Dark"
  },
  {
    "id": "2",
    "color": "White"
  },
];

export const EmailTypes = [
  {
    "id": "1",
    "item": "Name",
    "value": "name"
  },
  {
    "id": "2",
    "item": "Company's name",
    "value": "companyName"
  },
  {
    "id": "3",
    "item": "Numbers of employee",
    "value": "employeeNum"
  },
  {
    "id": "4",
    "item": "Position in the Company",
    "value": "position"
  },
  {
    "id": "5",
    "item": "Phone Number",
    "value": "phoneNum"
  },
  {
    "id": "6",
    "item": "Email",
    "value": "email"
  }
]

export const EmailItemCheck = {
  name: true,
  companyName: true,
  employeeNum: true,
  position: true,
  phoneNum: true,
  email: true
}

export const TalkAboutData = {
  title: "What we can talk about",
  emailList: [
    {
      id: "1",
      content: "1. Talk about your company’s goals and find out how our firm services can help boost your business",
      type: EmailItemCheck,
      viewOpen: false,
      editOpen: false,
    },
    {
      id: "2",
      content: "2. Give you an expert and actionable insight and current trends in relation to your business and industry",
      type: EmailItemCheck,
      viewOpen: false,
      editOpen: false,
    },
    {
      id: "3",
      content: "3. Talk about how our firm has transformed businesses in your industry.",
      type: EmailItemCheck,
      viewOpen: false,
      editOpen: false,
    }
  ]
}