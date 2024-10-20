import {
	Badge,
	Card,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableRow,
	Title
} from '@tremor/react'

const users:{
    id: string;
    name: string;
    email: string;
    github: string
}[] = [
    {
		id: "1",
		name: "Yazman Rodriguez",
		email: "yazmanito@gmail.com",
		github: "yazmanito",
	},
	{
		id: "2",
		name: "John Doe",
		email: "leo@gmail.com",
		github: "leo",
	},
	{
		id: "3",
		name: "Haakon Dahlberg",
		email: "haakon@gmail.com",
		github: "midudev",
	},
]

export function ListOfUsers () {
  
    return (
      <Card>
        <Table>
          <TableHead>
            <TableRow>
              <TableHeaderCell> Id </TableHeaderCell>
              <TableHeaderCell> Nombre </TableHeaderCell>
              <TableHeaderCell> Email </TableHeaderCell>
              <TableHeaderCell> Acciones </TableHeaderCell>
            </TableRow>
          </TableHead>
  
          <TableBody>
            {users.map((item) => (
              <TableRow key={item.name}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>{item.email}</TableCell>
                <TableCell>Acciones</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    )
  }