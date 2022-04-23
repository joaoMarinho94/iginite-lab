import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Head from 'next/head';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import { withApollo } from '../../lib/withApollo';
import { Enrollments } from '../../components/Enrollments';

function Courses(): JSX.Element {
  return (
    <>
      <Head>
        <title>Meus cursos</title>
        <link rel="shortcut icon" href="favicon.png" type="image/png" />
      </Head>

      <div className="bg-white">
        <div className="relative overflow-hidden bg-gray-50">
          <Header />

          <main className="py-20 max-w-7xl mx-auto ">
            <div className="text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
              <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">
                Estudar
              </h2>
              <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                Meus cursos
              </p>
            </div>

            <Enrollments />
          </main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = withPageAuthRequired({
  returnTo: '/',
});

export default withApollo(Courses);
