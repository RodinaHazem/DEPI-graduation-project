// import { useState } from "react";
// import styled from "styled-components";

// const PURPLE = "#370897";
// const INPUT_BORDER = "#e0e0e0";

// const InputBase = styled.input`
//   padding: 12px 15px;
//   border: 2px solid ${INPUT_BORDER};
//   border-radius: 8px;
//   font-size: 14px;
//   transition: border-color 200ms ease;
//   &:focus {
//     outline: none;
//     border-color: ${PURPLE};
//     box-shadow: 0 0 0 3px rgba(55, 8, 151, 0.1);
//   }
// `;

// const Container = styled.div`
//   width: 100%;
// `;

// const Header = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 30px;
// `;

// const Title = styled.h1`
//   font-size: 28px;
//   color: #333;
// `;

// const Btn = styled.button`
//   background: ${(props) => (props.$delete ? "#dc3545" : PURPLE)};
//   color: white;
//   border: none;
//   padding: ${(props) => (props.$small ? "8px 12px" : "10px 20px")};
//   border-radius: 6px;
//   cursor: pointer;
//   font-weight: 600;
//   font-size: ${(props) => (props.$small ? "12px" : "14px")};
//   transition: background 200ms ease;
//   &:hover {
//     background: ${(props) => (props.$delete ? "#c82333" : "#2a0670")};
//   }
// `;

// const Table = styled.table`
//   width: 100%;
//   border-collapse: collapse;
//   background: white;
//   border-radius: 8px;
//   overflow: hidden;
//   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
//   th {
//     background: ${PURPLE};
//     color: white;
//     padding: 15px;
//     text-align: left;
//   }
//   td {
//     padding: 12px 15px;
//     border-bottom: 1px solid #eee;
//   }
//   tr:hover {
//     background: #f9f9f9;
//   }
// `;

// const FormContainer = styled.div`
//   background: white;
//   padding: 40px;
//   border-radius: 12px;
//   box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
//   max-width: 600px;
//   margin: 0 auto;
// `;

// const FormTitle = styled.h2`
//   color: ${PURPLE};
//   margin-bottom: 30px;
//   font-size: 24px;
// `;

// const FormGroup = styled.div`
//   margin-bottom: 20px;
// `;

// const Label = styled.label`
//   display: block;
//   font-weight: 600;
//   margin-bottom: 8px;
//   color: #333;
//   font-size: 14px;
// `;

// const Input = styled(InputBase).attrs({ as: "input" })``;


// const FormActions = styled.div`
//   display: flex;
//   gap: 12px;
//   margin-top: 30px;
//   justify-content: flex-end;
// `;

export default function Trips() {
  // const [open, setOpen] = useState(false);

  
  return (
    <h1>hi</h1>
    // <Container>
    //   {open ? (
    //     <FormContainer>
    //       <FormTitle>Add New Trip</FormTitle>
    //       <form onSubmit={handleSubmit}>
    //         <FormGroup>
    //           <Label>Trip Title</Label>
    //           <Input
    //             type="text"
    //             name="title"
    //             value={formData.title}
    //             onChange={handleChange}
    //             placeholder="e.g., Paris City Tour"
    //             required
    //           />
    //         </FormGroup>

    //         <FormGroup>
    //           <Label>Destination</Label>
    //           <Input
    //             type="text"
    //             name="destination"
    //             value={formData.destination}
    //             onChange={handleChange}
    //             placeholder="e.g., Paris, France"
    //             required
    //           />
    //         </FormGroup>

    //         <FormGroup>
    //           <Label>Duration (days)</Label>
    //           <Input
    //             type="number"
    //             name="duration"
    //             value={formData.duration}
    //             onChange={handleChange}
    //             placeholder="e.g., 5"
    //             required
    //           />
    //         </FormGroup>

    //         <FormGroup>
    //           <Label>Price ($)</Label>
    //           <Input
    //             type="number"
    //             name="price"
    //             value={formData.price}
    //             onChange={handleChange}
    //             placeholder="e.g., 1200"
    //             required
    //           />
    //         </FormGroup>

    //         <FormActions>
    //           <Btn type="button" onClick={resetForm}>
    //             Cancel
    //           </Btn>
    //           <Btn type="submit">{editingId ? "Update Trip" : "Add Trip"}</Btn>
    //         </FormActions>
    //       </form>
    //     </FormContainer>
    //   ) : (
    //     <>
    //       <Header>
    //         <Title>Trips</Title>
    //         <Btn onClick={() => setOpen(true)}>+ Add Trip</Btn>
    //       </Header>

    //       <Table>
    //         <thead>
    //           <tr>
    //             <th>Title</th>
    //             <th>Destination</th>
    //             <th>Duration</th>
    //             <th>Price</th>
    //             <th>Status</th>
    //             <th>Actions</th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           {trips.map((trip) => (
    //             <tr key={trip.id}>
    //               <td>{trip.title}</td>
    //               <td>{trip.destination}</td>
    //               <td>{trip.duration} days</td>
    //               <td>${trip.price}</td>
    //               <td>{trip.status}</td>
    //               <td style={{ display: "flex", gap: "8px" }}>
    //                 <Btn $small onClick={() => handleEdit(trip)}>
    //                   Edit
    //                 </Btn>
    //                 <Btn onClick={() => handleDelete(trip.id)}>
    //                   Delete
    //                 </Btn>
    //               </td>
    //             </tr>
    //           ))}
    //         </tbody>
    //       </Table>
    //     </>
    //   )}
    // </Container>
  );
}
