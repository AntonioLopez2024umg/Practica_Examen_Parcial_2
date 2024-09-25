type Props = {
  texto: string;
};

export default function boton(props: Props) {
  const { texto } = props;

  return (
    <button type="submit" className="btn btn-outline-primary">
      {texto}
    </button>
  );
}