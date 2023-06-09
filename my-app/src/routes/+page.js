let currentPage = 3;  // This would have to be stored persistently somewhere

export async function load({ page, fetch }) {
    
    try {
        const BASE_URL = `https://api.unsplash.com`;
        const response = await fetch(
            `${BASE_URL}/search/photos?query=gaming&client_id=-N6JZHxqqovedx2eWCPPe5NbO2-r3h1SJE5_PnCWU7E&per_page=30&page=${currentPage}`
        );
        currentPage += 1;  // Increment the page for the next load

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const { results } = await response.json();
        const images = results.map((result) => result.urls.regular);

        return {
            props: {
                images
            }
        };
    } catch (error) {
        console.error(error);
        return { props: { images: [] } }; // return an empty array if there's an error
    }
}
