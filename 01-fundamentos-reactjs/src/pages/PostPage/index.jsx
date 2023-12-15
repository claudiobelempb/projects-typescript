import { HeaderMolecules } from './../../organisms/HeaderMolecules/index';
export function PostPage(props) {
  return (
    <>
      <HeaderMolecules />
      <h2>{props.author}</h2>
      <p>{props.content}</p>
    </>
  );
}
