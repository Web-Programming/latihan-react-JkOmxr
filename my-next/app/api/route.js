export async function POST() {
    let data = [
        {
            'npm' : '2327250021',
            'nama' : 'Kevin Kristian'
        },
        {
            'npm' : '2327250022', 
            'nama' : 'Kevin K'
        }
    ];

    return Response.json(data)
}