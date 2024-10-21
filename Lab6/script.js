document.getElementById("btn-download").addEventListener("click", () => {
    fetch("https://randomuser.me/api?results=5")
        .then(response => {
            if(!response.ok) {
                throw new Error("Network response was not ok")
            }
            return response.json();
        })
        .then(data => {
            const users = data.results;
            const userInfo = document.getElementById("user-info");
            userInfo.innerHTML = "";

            users.forEach(user => {
                userInfo.innerHTML += `
                    <div class="user-card">
                        <img src="${user.picture.large}" alt="User Picture">
                        <div>
                            <p><strong>Name:</strong> ${user.name.first} ${user.name.last}</p>
                            <p><strong>City:</strong> ${user.location.city}</p>
                            <p><strong>Country:</strong> ${user.location.country}</p>
                            <p><strong>Postcode:</strong> ${user.location.postcode}</p>
                        </div>
                    </div>
                `;
            });
        })
        .catch(error => {
            console.error("There was a problem with the fetch operation: ", error)
        })
});