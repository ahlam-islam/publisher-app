import { Injectable ,EventEmitter} from '@angular/core';
// declare the global variables
declare  var $: any;

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  // Declare the variables
  private proxy: any;
  private proxyName: string = 'NotificationHub';
  private connection: any;
  // create the Event Emitter
  public NotificationReceived: EventEmitter < any > ;
  public PublisherJoined: EventEmitter < any > ;
  public PublisherLeaved: EventEmitter < any > ;
  public SubscriberJoined: EventEmitter < any > ;
  public SubscriberLeaved: EventEmitter < any > ;
  public connectionEstablished: EventEmitter < Boolean > ;
  public connectionExists: Boolean;
  location: string;

  constructor() {
      // Constructor initialization
      this.location = location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') ;

      this.connectionEstablished = new EventEmitter < Boolean > ();
      this.NotificationReceived = new EventEmitter < any > ();
      this.connectionExists = false;
      // create hub connection
      this.connection = $.hubConnection(this.location);

      // create new proxy as name already given in tolocationp
      this.proxy = this.connection.createHubProxy(this.proxyName);
      // call the connecion start method to start the connection to send and receive events.
      this.startConnection();
      // register on server events
      this.registerOnServerEvents();

      this.connection.logging=true;
  }

  // check in the browser console for either signalr connected or not
  private startConnection(): void {
      this.connection.start().done((data: any) => {
          console.log('Now connected ' + data.transport.name + ', connection ID= ' + data.id);
          this.connectionEstablished.emit(true);
          this.connectionExists = true;
          // setInterval(() => {this.sendTime();}, 1000);  // this method call every second to tick and respone tansfered to client.
      }).fail((error: any) => {
          console.log('Could not connect ' + error);
          this.connectionEstablished.emit(false);
      });
  }
  private registerOnServerEvents(): void {

    // Register for an event with specify name and callback (eventName,callback)
      this.proxy.on('newNotification', (data: any) => {
          console.log('newNotification: ' + JSON.stringify(data));
          this.NotificationReceived.emit(data);
      });
      this.proxy.on('joinPublisher', (data: any) => {
          console.log('PublisherJoined: ' + JSON.stringify(data));
          this.PublisherJoined.emit(data);
      });
      this.proxy.on('leavePublisher', (data: any) => {
          console.log('PublisherLeaved: ' + JSON.stringify(data));
          this.PublisherLeaved.emit(data);
      });

  }
    // method to hit from client
    public sendNotification(notification:string) {
      // server side hub method using proxy.invoke with method name pass as param
      this.proxy.invoke('SendNotification',notification);
  }
    // method to hit from client
    public leavePublisher(publisherName:string) {
      // server side hub method using proxy.invoke with method name pass as param
      this.proxy.invoke('leavePublisher',publisherName)
      .done(() => {
        console.log(`Successfully Leave Group`);
    })
    .fail((error: any) => {
      console.log(`Failed to Leave Group:`+error);
    });
  }
    // method to hit from client
    public joinPublisher(publisherName:string) {
      // server side hub method using proxy.invoke with method name pass as param
      this.proxy.invoke('joinPublisher',publisherName)
      .done(() => {
        console.log(`Successfully Join Group`);
    })
    .fail((error: any) => {
      console.log(`Failed to Join Group:`+error);
    });
  }
}
