import { Planifier } from './modules/planifier/planifier.component';
import { Footer } from './modules/shared/layouts/componenets/footer';

function App() {
  return (
    <div bg-background text-white min-h-screen box-border overflow-auto flex flex-col max-w-screen>
      <div max-w-4xl mx-auto flex-1 px-16px>
        <h1 text-center mb-12 mt-8>
          Wooden Christmas tree planifier
        </h1>

        <Planifier />
      </div>

      <Footer />
    </div>
  );
}

export default App;
