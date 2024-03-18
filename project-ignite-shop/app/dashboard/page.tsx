type CartType = {
  name: string;
  qtde: number;
  price: number;
  fragile: boolean;
};

type InitialType = {
  qtde: number;
  total: number;
  media: number;
};
export default function Dashboard() {
  return (
    <div>
      <h1 className='text-black'>Dashbord</h1>
    </div>
  );
}
