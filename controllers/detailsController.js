exports.getMe=(req,res, next)=>{

    res.status(200).json({
        slackUsername: 'temitayodev',
        backend: true,
        age: 20,
        bio: 'My name is Akinsanya Temitayo, I am currently a student of University of Lagos, studying Electrical/Electronics Engineering. I am a Nodejs Backend developer'


    })

}

exports.operation=(req,res, next)=>{

let operation_type;
if (req.body.operation_type.includes('add')
) {
    operation_type = "+";
    operation = "addition"
  }else if(req.body.operation_type.includes('sub')){
    operation_type ="-";
    operation = "subtraction"
  }else {
    operation_type = '*'
    operation = "multiplication"
  }
const x= req.body.x;
const y = req.body.y;
const result = eval(x + operation_type + y);
    res.status(201).json({
        slackUsername: "Temitayodev",
        result,
        operation_type: operation
      
    })

}

