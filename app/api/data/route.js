export async function GET(request) {
    const data = {
        id: 1,
        name: 'John Doe',   
        age: 30
    };
    
    return new Response(JSON.stringify(data) );
}

export async function POST(request) {
    
    
    return new Response(JSON.stringify(data) );
}