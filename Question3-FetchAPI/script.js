
const getQuote = async () => {

    try {
        const response = await fetch(
            "https://dummyjson.com/quotes/random"
        );

        if (!response.ok) {
            throw new Error("API request failed");
        }

        const data = await response.json();

        document.getElementById("quote").innerText =
            data.quote;

        document.getElementById("author").innerText =
            "- " + data.author;

    } catch (error) {
        document.getElementById("quote").innerText =
            "Unable to fetch quote. Please try again.";

        document.getElementById("author").innerText = "";
    }
};
