// import { render, screen } from "@testing-library/react"
// import DetailsModal from "./DetailsModal"

// describe("DetailsModal Component", () => {
//     it('should render the heading', () => {
//         const patient = {
//             picture: {medium: "https://randomuser.me/api/portraits/med/women/31.jpg"},
//             name: {title: "MS", first: "Katie", last: "Zhang"},
//             email: "katie.zhang@example.com",
//             gender: "female",
//             dob: {date: "1954-04-10T01:10:37.321Z"},
//             phone: "(779)-680-3322",
//             location: {country: "New Zealand", state: "Tasman", city: "Rotorua", street: {name: "Domain Road", number: 9268}},
//             login: {uuid: "8fdfe3bc-25f3-44d6-9ccd-7b225ccead06"},          
//         }
//         render(<DetailsModal open={true} data={patient}/>)

//         expect(
//             screen.getByRole('heading', { name: /Patient Details/i})
//         ).toBeInTheDocument()
//     })
// })