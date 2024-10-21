import { type User } from "../types";

interface Props {
  personas: User[]
}
export function UsersList({ personas }: Props) {
  return (
    <table width='100%'>
      <thead>
        <tr>
          <th>Foto</th>
          <th>Nombre</th>
          <th>Apellido</th>
          <th>País</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {
          personas.map(persona => {
            return (
              <tr key={persona.id.value}>
                <td><img src={persona.picture.thumbnail} alt={persona.name.first} /></td>
                <td>{persona.name.first}</td>
                <td>{persona.name.last}</td>
                <td>{persona.location.country}</td>
                <td>
                <button>Eliminar</button>
              </td>
              </tr>
            )
          })
        }
      </tbody>
    </table>
  )
}
