const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5M2M0MTg0YWZiNTdiMTZiY2RkOWVhM2Y5MGJkZDViMCIsInN1YiI6IjY2MzBhYTFmYjViYzIxMDEyNzUzOTQ3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Na3yzyp3EqNDBlG6vwIgp6FxGzg5BZ3CNbsOd2HtLLw'
    }
};




// TVDM

// async function fetchEndPoint(params: string) {
//     const options = {
//         method: 'GET',
//         headers: {
//             accept: 'application/json',
//             Authorization: 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOiIiLCJhcGlrZXkiOiI5Y2ZlNGFmYi05ZmVmLTQwYzAtOGJjNC0zZWJjNTlkZDA1MjIiLCJjb21tdW5pdHlfc3VwcG9ydGVkIjpmYWxzZSwiZXhwIjoxNzE3NDMxNDI2LCJnZW5kZXIiOiIiLCJoaXRzX3Blcl9kYXkiOjEwMDAwMDAwMCwiaGl0c19wZXJfbW9udGgiOjEwMDAwMDAwMCwiaWQiOiIyNDY0MDU2IiwiaXNfbW9kIjpmYWxzZSwiaXNfc3lzdGVtX2tleSI6ZmFsc2UsImlzX3RydXN0ZWQiOmZhbHNlLCJwaW4iOm51bGwsInJvbGVzIjpbXSwidGVuYW50IjoidHZkYiIsInV1aWQiOiIifQ.A1O1IpqGzMX4_8iib1HKoSlfsnFwhK4Zq0tUV-YE9r1fF7VAV2EYUNUn1M6wO6fEJtsUsWwYpQE1Sb5_QCuwBdkdMibx1QobNPEqjslFKxOgvkvSG2gl0214ADLpMb9BFKhEOkimz23SRIeg8y7sG_PBaPfC-SMvu9WAXYS45IIc9SKkyWnt0ddXe2jgATeOIeXm5Fhmgjs2MH5D3lAVDwCYslylJKLJ3XL28eedJLQinFi5CctsIleEQ8WRLUMvIcPEnxUykl4jAovjr7L76ZnZhRzDXjExgYYLRAIC29GmRMuVTFBiqIueIzgko1IMF__g2TzKJLSveVq2n865Ki5qtaEXUWnxAmGt0PxvSGEpIzJ9GypC_0ARSWVpKT45ZC-Fv77V_7a63YTRMONPLk3R5mQclV-1Fq-8fxAphZIHGMSsuvCIcHRg0MlAKzcmMtKeiGSNEs95mc53aepDRnCq4DeOTCxN26cr8Foi-Z_qpAxLhX-Q328AWap8g3aWaEg6iCDCFEIBcl3AIArzRTTxw7KtFS0a7hSc3hOkZORAKdy7OVZdM6PGWjiDzi4qs_uHd_KMWNE4b3_Zs_0LBTJRz9NXOHE3W5jsQUfR8FCOfgDaVjSwKOKnC1JOycUldhYXrl_i6yUSAHPVz8s2wAW1CVyOBfOT4BcuS4d-Ei0'
//         }
//     };
//     try {
//         return await fetch(`https://api4.thetvdb.com/v4/${params}`, options)
//             .then(response => response.json())
//             .then(response => response.results)

//     } catch (error) {
//         console.log(error)
//         return []
//     }
// }

export const Movie = async () => {
    fetch('https://api4.thetvdb.com/v4/movies?page=0', {
        method: 'GET',
        headers: {
            'accept': 'application/json',
            'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZ2UiOiIiLCJhcGlrZXkiOiI5Y2ZlNGFmYi05ZmVmLTQwYzAtOGJjNC0zZWJjNTlkZDA1MjIiLCJjb21tdW5pdHlfc3VwcG9ydGVkIjpmYWxzZSwiZXhwIjoxNzE3NDMxNDI2LCJnZW5kZXIiOiIiLCJoaXRzX3Blcl9kYXkiOjEwMDAwMDAwMCwiaGl0c19wZXJfbW9udGgiOjEwMDAwMDAwMCwiaWQiOiIyNDY0MDU2IiwiaXNfbW9kIjpmYWxzZSwiaXNfc3lzdGVtX2tleSI6ZmFsc2UsImlzX3RydXN0ZWQiOmZhbHNlLCJwaW4iOm51bGwsInJvbGVzIjpbXSwidGVuYW50IjoidHZkYiIsInV1aWQiOiIifQ.A1O1IpqGzMX4_8iib1HKoSlfsnFwhK4Zq0tUV-YE9r1fF7VAV2EYUNUn1M6wO6fEJtsUsWwYpQE1Sb5_QCuwBdkdMibx1QobNPEqjslFKxOgvkvSG2gl0214ADLpMb9BFKhEOkimz23SRIeg8y7sG_PBaPfC-SMvu9WAXYS45IIc9SKkyWnt0ddXe2jgATeOIeXm5Fhmgjs2MH5D3lAVDwCYslylJKLJ3XL28eedJLQinFi5CctsIleEQ8WRLUMvIcPEnxUykl4jAovjr7L76ZnZhRzDXjExgYYLRAIC29GmRMuVTFBiqIueIzgko1IMF__g2TzKJLSveVq2n865Ki5qtaEXUWnxAmGt0PxvSGEpIzJ9GypC_0ARSWVpKT45ZC-Fv77V_7a63YTRMONPLk3R5mQclV-1Fq-8fxAphZIHGMSsuvCIcHRg0MlAKzcmMtKeiGSNEs95mc53aepDRnCq4DeOTCxN26cr8Foi-Z_qpAxLhX-Q328AWap8g3aWaEg6iCDCFEIBcl3AIArzRTTxw7KtFS0a7hSc3hOkZORAKdy7OVZdM6PGWjiDzi4qs_uHd_KMWNE4b3_Zs_0LBTJRz9NXOHE3W5jsQUfR8FCOfgDaVjSwKOKnC1JOycUldhYXrl_i6yUSAHPVz8s2wAW1CVyOBfOT4BcuS4d-Ei0' // Replace YOUR_ACCESS_TOKEN with your actual access token
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // console.log('Data:', data);
            return [data.data]
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
            return []
        });

    // const data = await fetchEndPoint('movies')
    // return data
}



// TMDB

export const Upcoming = async (page) => {
    return await fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}`, options)
        .then(response => response.json())
        .then(response => response.results)
        .catch(err => {
            console.error(err)
            return [];
        });
}
