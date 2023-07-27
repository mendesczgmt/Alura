package med.voll.api.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/helo")
public class HelloController {
    
    public String olaMundo(){
        return "Hello world!";
    }
}
