// pages/ES.js
export default function ESPage() {
    // No necesitas contenido aquí, ya que la página nunca se renderizará debido a la redirección.
    return null;
}

export async function getServerSideProps() {
    return {
        redirect: {
            destination: '/',
            permanent: true, // Cambia a true si la redirección debe ser permanente
        },
    };
}
