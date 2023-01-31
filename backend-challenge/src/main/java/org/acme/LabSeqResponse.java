package org.acme;

public class LabSeqResponse {
    public String result;
    public int status;

    public LabSeqResponse(){
    }

    public LabSeqResponse(String result, int status){
        this.result = result;
        this.status = status;
    }
}
