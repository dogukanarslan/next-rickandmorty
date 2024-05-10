'use client'

import { useRouter } from 'next/navigation';

const CharacterRow = (props) => {
  const { character } = props;

  const router = useRouter();

  return (
    <tr
      key={character.id}
      onClick={() => router.push(`/characters/${character.id}`)}
    >
      <td>{character.name}</td>
      <td>{character.status}</td>
      <td>{character.species}</td>
      <td>{character.type}</td>
      <td>{character.gender}</td>
    </tr>
  );
};

export default CharacterRow;
