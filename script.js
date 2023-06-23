var breedImage = $("#breed-image");
var dropdown = $("#dog-breeds");

$.get("https://dog.ceo/api/breeds/list/all", function (data, status) {
    let dogBreeds = data.message;
    for (let breed in dogBreeds) {
        dropdown.append('<option value="' + breed + '">' + breed + '</option>');
    }

});