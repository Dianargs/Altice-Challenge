package org.acme;

import java.math.BigInteger;
import java.text.DecimalFormat;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

/**
 * It's a RESTful web service that takes a number as a parameter and returns the nth number in the Lab
 * Sequence
 */

@Path("/labseq")
public class LabSeq {
   // A JAX-RS annotation that tells the server to respond with JSON.
    @GET
    @Path("/{n}")
    @Produces(MediaType.APPLICATION_JSON)
    public LabSeqResponse labSeqGet(long n) {
       // Checking if the input is negative. If it is, it will return an error message.
        if(n<0){
           // Error err= new Error(400,"Don't use negative numbers! Try again!");
           LabSeqResponse err = new LabSeqResponse("Don't use negative numbers! Try again!",400);
            return err;
        }
        
        BigInteger n0 = new BigInteger("0"), n2 = new BigInteger("0"), result = new BigInteger("0");
        BigInteger n1 = new BigInteger("1"), n3 = new BigInteger("1");
        BigInteger flag = new BigInteger("" + Integer.MAX_VALUE);

        DecimalFormat df = new DecimalFormat("0.0000E0");
        
       // Calculating the nth number in the Lab Sequence.
        for (long i = 4; i <= n; i++) {
            if (n > 3) {
                result = n0.add(n1); //
                n0 = n1;
                n1 = n2;
                n2 = n3;
                n3 = result;
            } else {
                if (n % 2 == 0) {
                    result = new BigInteger("0");
                } else {
                    result = new BigInteger("1");
                }
            }
        }
        // Checking if the result is less than the max value of an integer. If it is, it will return
        // the result as a string.
        if (result.compareTo(flag) == -1) {
            LabSeqResponse resp = new LabSeqResponse(result.toString(),200);
            return resp;
        }

       // Formatting the result to a string.
        String r = df.format(result).replace(",", ".");
        LabSeqResponse resp = new LabSeqResponse(r.toString(),200);
        return resp;
    }
}
