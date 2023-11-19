import { Planifier } from './modules/planifier/planifier.component';
import { Footer } from './modules/shared/layouts/componenets/footer';

function App() {
  return (
    <div bg-background text-white min-h-screen box-border overflow-auto flex flex-col max-w-screen>
      <div max-w-4xl mx-auto flex-1 px-16px w-full>
        <div mb-16 mt-8 max-w-600px mx-auto>
          <h1 text-center mt-0 mb-2>
            Wooden Christmas tree planifier
          </h1>
          <div text-center op-50>
            Plan your next diy wooden christmas tree! Get the dimensions of the wood you need to buy, and the number of battens you need to cut.
          </div>
        </div>

        <Planifier />
      </div>

      <Footer />
    </div>
  );
}

export default App;
